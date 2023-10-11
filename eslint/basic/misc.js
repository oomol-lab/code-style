module.exports = {
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
        {
            files: ["scripts/**/*.*", "cli.*"],
            rules: {
                "no-console": "off",
            },
        },
        {
            files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
            rules: {
                "no-unused-expressions": "off",
            },
        },
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "no-undef": "off",
            },
        },
        {
            files: ["package.json"],
            rules: {
                "max-len": "off",
            }
        },
    ],
    ignorePatterns: [
        "*.min.*",
        "*.d.ts",
        "CHANGELOG.md",
        "dist",
        "LICENSE*",
        "output",
        "coverage",
        "public",
        "temp",
        "package-lock.json",
        "pnpm-lock.yaml",
        "yarn.lock",
        "__snapshots__",
        "!.github",
        "!.vitepress",
        "!.vscode",
    ],
};
