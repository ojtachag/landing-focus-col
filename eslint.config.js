import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylisticTs from '@stylistic/eslint-plugin-ts';


export default [
    {
        files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}']
    },
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            '@stylistic/ts': stylisticTs,
        }
    },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            '@stylistic/ts/quotes': ['error', 'single'],
            '@stylistic/ts/object-curly-spacing': ['error', 'always'],
            '@stylistic/ts/semi': ['error', 'always'],

        }
    },
    {
        settings: {
            react: {
                version: 'detect',
            }
        }
    }
];