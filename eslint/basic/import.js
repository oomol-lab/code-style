module.exports = {
    plugins: ["import-newlines"],
    rules: {
        "import-newlines/enforce": [
            "error",
            {
                "items": 4,
                "max-len": 180,
                "semi": true,
            },
        ],
    },
};
