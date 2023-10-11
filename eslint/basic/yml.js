module.exports = {
    extends: [
        "plugin:yml/recommended",
    ],
    overrides: [
        {
            files: ["*.yaml", "*.yml"],
            parser: "yaml-eslint-parser",
            rules: {
                "spaced-comment": "off",
                "yml/spaced-comment": "error",
            },
        },
    ],
    rules: {
        "yml/quotes": ["error", {
            prefer: "double",
            avoidEscape: false,
        }],
        "indent": "off",
        "yml/indent": ["error", 2],
    },
};
