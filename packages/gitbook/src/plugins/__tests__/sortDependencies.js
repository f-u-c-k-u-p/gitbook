const PluginDependency = require('../../models/pluginDependency');
const sortDependencies = require('../sortDependencies');
const toNames = require('../toNames');

describe('sortDependencies', () => {
    it('must load themes after plugins', () => {
        const allPlugins = PluginDependency.listFromArray([
            'hello',
            'theme-test',
            'world'
        ]);

        const sorted = sortDependencies(allPlugins);
        const names = toNames(sorted);

        expect(names).toEqual([
            'hello',
            'world',
            'theme-test'
        ]);
    });

    it('must keep order of themes', () => {
        const allPlugins = PluginDependency.listFromArray([
            'theme-test',
            'theme-test1',
            'hello',
            'theme-test2',
            'world'
        ]);
        const sorted = sortDependencies(allPlugins);
        const names = toNames(sorted);

        expect(names).toEqual([
            'hello',
            'world',
            'theme-test',
            'theme-test1',
            'theme-test2'
        ]);
    });
});
