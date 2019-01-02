// This file contains the code used for the schematic run after running `ng add ngx-ytd-api`

// import { moduleNames } from './module-names';
import { Schema } from './schema';
import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';

export default function (options: Schema): Rule {
  return addModules(options);
}

/**
 * Adds the neccessary API modules to the main app's `app.module.ts` file
 * @param options The list of options specified via the schematic
 */
function addModules(options: Schema) {
  return (_host: Tree, context: SchematicContext) => {
    if (options.skipSetup) {
      if (context.debug) {
        return context.logger.debug('Skipping setup as the --skipSetup flag has been specified.');
      } else {
        return;
      }
    }
    if (options.importModules) {
      return context.logger.debug(JSON.stringify(options.importModules));
    }
  };
}
