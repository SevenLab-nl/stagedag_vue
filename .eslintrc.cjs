/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        'vue/setup-compiler-macros': true,

    },
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/typescript/recommended',
    ],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['warn', 4],
        semi: ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        camelcase: 'off',
        radix: 'off',
        '@typescript-eslint/camelcase': 'off',
        'max-len': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'class-methods-use-this': 'off',
        'no-return-assign': 'off',
        'newline-after-var': 'off',
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 3,
        }],
        'no-param-reassign': 'off',
        'no-explicit-any': 'off',
        'prefer-destructuring': ['warn',
            {
                object: false,
                array: false,
            }, {
                enforceForRenamedProperties: false,
            },
        ],
        'linebreak-style': 'off',
        'lines-between-class-members': 'off',
        'no-restricted-syntax': 'off',
        'default-case': 'off',
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-trailing-spaces': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: 'if',
                next: 'if',
            },
        ],
        'no-prototype-builtins': 'off',
        'spaced-comment': 'off',
        'space-after-function-name': 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
            },
        }],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
        'vue/singleline-html-element-content-newline': ['error', {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: [],
        }],
        'vue/multiline-html-element-content-newline': ['error', {
            ignoreWhenEmpty: true,
            ignores: [],
            allowEmptyLines: false,
        }],
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT',
            ],
            alphabetical: false,
        }],
        'vue/no-v-for-template-key': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
        'no-use-before-define': 'off',
        'vue/no-deprecated-slot-attribute': 'off',
    },
};
