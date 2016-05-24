#!/usr/bin/env node

const args = process.argv.slice(2)
var user = args[0]
var names
var packages = []

if (!user) {
  console.error(`Usage: packages by <username>`)
  process.exit()
} else if (user === 'by') {
  user = args[1]
}

const registry = require('all-the-packages')
const got = require('got')
const url = require('url').format({
  protocol: 'https',
  host: 'registry.npmjs.org',
  pathname: `-/user/${encodeURIComponent(user)}/package`,
  query: {page: 0, per_page: 1000}
})

console.error(url)

got(url, {json: true})
  .then(response => {
    names = response.body.items.map(item => item.name)
    console.error(names)
    registry
      .on('package', function (pkg) {
        if (names.indexOf(pkg.name) > -1) {
          packages.push(pkg)
          console.error(`${pkg.name}\n${pkg.description}\n\n`)
        }
      })
      .on('end', function () {
        process.stdout.write(JSON.stringify(packages, null, 2))
        process.exit()
      })
  })
  .catch(error => {
    console.log(error.response.body)
    process.exit()
  })
