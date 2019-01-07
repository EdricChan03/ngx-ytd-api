// Based on the source code found in material2's code.

import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { Tree } from '@angular-devkit/schematics';
import { createTestApp, getFileContent } from '../testing';

describe('ng-add schematic', () => {
  let runner: SchematicTestRunner;
  let appTree: Tree;

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', require.resolve('../collection.json'));
    appTree = createTestApp(runner);
  });

  it('should update package.json', () => {
    const tree = runner.runSchematic('ng-add', {}, appTree);
    const packageJson = JSON.parse(getFileContent(tree, '/package.json'));
    const dependencies = packageJson.dependencies;

    // TODO: Check if the ngx-simple-http package is installed internally in the ngx-ytd-api package
    // expect(dependencies['ngx-simple-http']).toBeDefined();
    expect(dependencies['ngx-ytd-api']).toBeDefined();

    expect(Object.keys(dependencies)).toEqual(Object.keys(dependencies).sort(),
        'Expected the modified "dependencies" to be sorted alphabetically.');

    expect(runner.tasks.some(task => task.name === 'run-schematic')).toBe(true);
  });
});
