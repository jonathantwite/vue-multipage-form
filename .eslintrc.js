module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4],
        "no-use-before-define": "warn",
        //"camelcase": "error",
        "comma-dangle": "error",
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [ "error", "last" ],
        "func-call-spacing": [ "error", "never" ],
        "new-cap": [
            "error",
            {
                "properties": false
            }
        ],
        "new-parens": "error",
        "no-unused-expressions": "error",
        "object-curly-spacing": [ "error", "always" ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
