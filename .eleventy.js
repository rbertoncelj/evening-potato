module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "docs",
            output: "dist"
        },
        pathPrefix: "evening-potato"
    }
};