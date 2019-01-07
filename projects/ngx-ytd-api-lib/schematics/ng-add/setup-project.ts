// This file contains the code used for the schematic run after running `ng add ngx-ytd-api`

// import { moduleNames } from './module-names';
import { Schema } from './schema';
import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import {
  addModuleImportToRootModule,
  getProjectMainFile,
  getProjectFromWorkspace,
  hasNgModuleImport
} from '../utils';
import { getWorkspace } from '@schematics/angular/utility/config';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { moduleNames, ModuleName } from './module-names';

export default function (options: Schema): Rule {
  return addModules(options);
}

/**
 * Adds the neccessary API modules to the main app's `app.module.ts` file
 * @param options The list of options specified via the schematic
 */
function addModules(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const appModulePath = getAppModulePath(host, getProjectMainFile(project));
    context.logger.info(`Debug mode enabled? ${context.debug}`);
    if (options.importModules) {
      context.logger.info('Adding modules to main app module...');
      // tslint:disable-next-line:forin
      for (const module of options.importModules) {
        // tslint:disable-next-line:no-non-null-assertion
        if (hasNgModuleImport(host, appModulePath, getModuleFromApiType(module)!.name)) {
          // tslint:disable-next-line:no-non-null-assertion
          context.logger.warn(`Could not set up ${getModuleFromApiType(module)!.name} as it is already imported.`);
        } else {
          // tslint:disable-next-line:no-non-null-assertion
          addModuleImportToRootModule(host, getModuleFromApiType(module)!.name, getModuleFromApiType(module)!.importFrom, project);
        }
      }
    }
  };
}

/**
 * Retrieves a module name from an API type
 * @param type The API type
 * @returns An object of type {@link ModuleName}, or `undefined` otherwise
 */
function getModuleFromApiType(type: string): ModuleName | undefined {
  const module = moduleNames.find((m) => m.type === type);
  return module;
}
