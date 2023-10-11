module.exports = {
    extends: [
        "plugin:jsonc/recommended-with-jsonc",
    ],
    overrides: [
        {
            files: ["*.json", "*.json5"],
            parser: "jsonc-eslint-parser",
            rules: {
                "semi": "off",
                "jsonc/array-bracket-spacing": ["error", "never"],
                "comma-dangle": "off",
                "jsonc/comma-dangle": ["error", "never"],
                "jsonc/comma-style": ["error", "last"],
                "jsonc/indent": ["error", 2],
                "indent": "off",
                "jsonc/key-spacing": ["error", {
                    beforeColon: false,
                    afterColon: true,
                }],
                "jsonc/no-octal-escape": "error",
                "jsonc/object-curly-newline": ["error", {
                    minProperties: 1,
                }],
                "jsonc/object-curly-spacing": ["error", "always"],
                "jsonc/object-property-newline": "error",
            },
        },
    ],
};
