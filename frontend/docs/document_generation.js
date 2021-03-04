const fs = require('fs')
const docsToMarkdown = require('react-docs-markdown')
const api = require('./documentation.json')

// generate docs.md from the output of react-docgen(documentation.json)
for (const key in api) {
  fs.appendFile('docs.md', docsToMarkdown(api[key], key), (err) => { if (err) throw err })
}
