import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default [
    // browser-friendly UMD build
    // {
    //     input: 'index.ts',
    //     output: {
    //         name: 'howLongUntilLunch',
    //         file: pkg.browser,
    //         format: 'umd'
    //     },
    //     plugins: [
    //         typescript(),
    //         resolve(),
    //         commonjs()
    //     ]
    // },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'index.ts',
        external: [''],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            nodePolyfills(),
            resolve({ preferBuiltins: false }),
            commonjs(),
            json(),
            typescript(),
        ],
    }
];
