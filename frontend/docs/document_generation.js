let fs = require('fs')
let docsToMarkdown = require('react-docs-markdown')
let api = require('./documentation.json')

// generate docs.md from the output of react-docgen(documentation.json)
for (const key in api) {
  fs.appendFile('docs.md', docsToMarkdown(api[key], key), (err) => { if (err) throw err })
}