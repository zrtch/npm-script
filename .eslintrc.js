module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: 'eslint:recommended',
    rules: {
        indent: ['error', 4],
        'linebreak-style': [0, 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};