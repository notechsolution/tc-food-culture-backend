module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    env: {
        browser: true,
        node: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint', 'jest',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "@typescript-/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-inferrable-types": [
            "warn", {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/ban-types": "warn",
        "object-curly-spacing": ["error", "always"],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        'vue/custom-event-name-casing': 'off',
        'vue/attributes-order': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/html-self-closing': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/no-arrow-functions-in-watch': 'off',
        'vue/no-template-key': 'off',
        'vue/no-v-html': 'off',
        'vue/comment-directive': 'off',
        'vue/no-parsing-error': 'off',
        'vue/no-deprecated-v-on-native-modifier': 'off',
        'vue/multi-word-component-names': 'off',
        'no-useless-escape': 'off',
        'no-sparse-arrays': 'off',
        'no-prototype-builtins': 'off',
        'no-constant-condition': 'off',
        'no-use-before-define': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'generator-star-spacing': 'off',
        'no-unreachable': 'off',
        'no-multiple-template-root': 'off',
        'no-unused-vars': 'error',
        'no-v-model-argument': 'off',
        'no-case-declarations': 'off',
        'no-console': 'error',
        'no-redeclare': 'off',
    },
    globals: {
        "window": true
    }
};
