const yaml = require("./yml");
const unicorns = require("./unicorns");
const json = require("./json");
const eslintComments = require("./eslint-comments");
const commons = require("./commons");
const misc = require("./misc");
const importConfig = require("./import");

module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
    },
    reportUnusedDisableDirectives: true,
    extends: [
        ...yaml.extends,
        ...json.extends,
        ...eslintComments.extends,
    ],
    plugins: [
        ...unicorns.plugins,
        ...importConfig.plugins,
    ],
    ignorePatterns: [
        ...misc.ignorePatterns,
    ],
    overrides: [
        ...yaml.overrides,
        ...json.overrides,
        ...misc.overrides,
    ],
    rules: {
        ...yaml.rules,
        ...unicorns.rules,
        ...eslintComments.rules,
        ...commons.rules,
        ...importConfig.rules,
    },
};
