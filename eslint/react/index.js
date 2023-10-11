module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "@oomol-lab/eslint-config-ts",
    ],

    rules: {
        "react/react-in-jsx-scope": "off",
    },
};
