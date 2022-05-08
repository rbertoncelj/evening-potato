const markdownIt = require("markdown-it")
const markdownItAnchor = require("markdown-it-anchor")

module.exports = (eleventyConfig) => {
  const markdownItOptions = {
    html: true,
  }
  
  const markdownItAnchorOptions = {
    permalink: false,
  }

  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  )

  eleventyConfig.setLibrary("md", markdownLib)

  return {
    pathPrefix: "evening-potato",
    dir: {
        input: "docs",
        output: "dist"
    },
  }
};