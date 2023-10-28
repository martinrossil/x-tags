import clear from 'rollup-plugin-clear';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import typescript from 'rollup-plugin-typescript2';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import strip from '@rollup/plugin-strip';
import filesize from 'rollup-plugin-filesize';
import { defineConfig } from 'rollup';

export default defineConfig({
	input: './src/index.ts',
	plugins: [
		clear({ targets: ['lib'] }),
		resolve(),
		esbuild({
			tsconfig: 'tsconfig.build.json',
			// minify: true,
			// treeShaking: true
		}),
		
		compiler({
            language_in: 'ECMASCRIPT_2020',
            compilation_level: 'ADVANCED',
            language_out: 'ECMASCRIPT_2017'
        }),
		strip({ include: '**/*.(js|ts)' }),
        filesize({ showBrotliSize: true }),
	],
	output: {
        dir: 'lib',
        // entryFileNames: '[name].[hash].js',
        format: 'esm',
    },
});