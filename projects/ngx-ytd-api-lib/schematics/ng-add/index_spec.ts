// Based on the source code found in angular/components' code and
// a blog post from okta: https://developer.okta.com/blog/2019/02/13/angular-schematics

import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

describe('ng-add schematic', () => {
  let runner: SchematicTestRunner;
  let appTree: UnitTestTree;

  const workspaceOptions = {
    name: 'workspace',
    newProjectRoot: 'projects',
    version: '0.5.0',
  };
  const appOptions = {
    name: 'schematest'
  };

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', require.resolve('../collection.json'));
    appTree = await runner.runExternalSchematicAsync('@schematics/angular', 'workspace', workspaceOptions).toPromise();
    appTree = await runner.runExternalSchematicAsync('@schematics/angular', 'application', appOptions, appTree).toPromise();
  });

  it('should update package.json', async () => {
    const tree = await runner.runSchematicAsync('ng-add', {}, appTree).toPromise();
    // const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
    const packageJson = JSON.parse(tree.readContent('/package.json'));
    const dependencies = packageJson.dependencies;

    // TODO: Check if the ngx-simple-http package is installed internally in the ngx-ytd-api package
    // expect(dependencies['ngx-simple-http']).toBeDefined();
    expect(dependencies['ngx-ytd-api']).toBeDefined();

    expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort(),
      'Expected the modified "dependencies" to be sorted alphabetically.');

    // expect(runner.tasks.some(task => task.name === 'run-schematic')).toBe(true);
  });
  describe('skipInstall enabled', () => {
    it('should not install package dependencies', async () => {
      const tree = await runner.runSchematicAsync('ng-add', { skipInstall: true }, appTree).toPromise();
      expect(tree.exists('node_modules')).toBeFalsy();
    });
  });
});
