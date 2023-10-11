module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".json"]
    },

    parser: "@typescript-eslint/parser",

    extends: [
        "@oomol-lab/eslint-config-basic",
    ],

    plugins: [
        "@typescript-eslint",
    ],

    overrides: [
        {
            files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
            rules: {
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "@typescript-eslint/no-this-alias": "off",
                "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
            },
        },
        {
            "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
            "rules": {
                "@typescript-eslint/explicit-member-accessibility": ["error", {
                    overrides: {
                        accessors: "explicit",
                        constructors: "explicit",
                        methods: "explicit",
                        properties: "explicit",
                        parameterProperties: "explicit",
                    },
                }],
                "@typescript-eslint/explicit-module-boundary-types": "error",
            },
        },
        {
            "files": ["*.json", "*.json5"],
            "rules": {
                "@typescript-eslint/indent": "off",
            }
        }
    ],

    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": ["error", {
            extendDefaults: true,
            types: {
                "{}": false
            }
        }],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": ["error", {
            ignoreRestArgs: true,
        }],
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": ["error", {
            checksVoidReturn: {
                arguments: false,
            },
        }],
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": ["error", {
            allowNumber: true,
            allowBoolean: true,
            allowAny: true,
            allowNullish: true,
            allowRegExp: true,
        }],
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["warn", {
            "allow": [
                "private-constructors",
                "protected-constructors",
                "decoratedFunctions",
                "overrideMethods",
            ],
        }],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            args: "after-used",
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
        }],
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1, body: 1 },
            FunctionExpression: { parameters: 1, body: 1 },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false,
            ignoredNodes: [
              "TemplateLiteral *",
              "JSXElement",
              "JSXElement > *",
              "JSXAttribute",
              "JSXIdentifier",
              "JSXNamespacedName",
              "JSXMemberExpression",
              "JSXSpreadAttribute",
              "JSXExpressionContainer",
              "JSXOpeningElement",
              "JSXClosingElement",
              "JSXFragment",
              "JSXOpeningFragment",
              "JSXClosingFragment",
              "JSXText",
              "JSXEmptyExpression",
              "JSXSpreadChild",
              "TSTypeParameterInstantiation",
              "FunctionExpression > .params[decorators.length > 0]",
              "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
              "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
            ],
            offsetTernaryExpressions: true,
          }],
    },
};
