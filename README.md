# packages-by-user

Compile an extensive JSON array of a given user's npm packages

As [@tobiaslabs](https://github.com/tobiaslabs/npm-owned-modules) aptly noted:

> Since npm doesn't publish any docs for interacting with their API, the best
you can do is read through their website repo and try to reverse engineer it.

This module is a command-line interface for piping a user's entire
package repertoire to stdout as a JSON array. Each package object in the
array contains all the metadata provided by npm's skimdb registry.

## Usage

```sh
npm i -g packages-by-user
packages by zeke > zeke.json
```

## Dependencies

- [all-the-modules](git+https://github.com/zeke/packages-by-user.git):
- [got](https://github.com/sindresorhus/got): Simplified HTTP requests

## Dev Dependencies

None

## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
