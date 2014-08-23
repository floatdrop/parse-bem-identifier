# parse-bem-identifier [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Parsing B__E_M identifier.

You can learn about identifier structure from [tests](https://github.com/floatdrop/parse-bem-identifier/blob/master/test/index.js).

## API

### parseBemIdentifier(string, [options])

Parses `string` as BEM identifier and returns object, that contains:

 * `block`
 * `mod`
 * `modVal`
 * `elem`
 * `elemMod`
 * `elemVal`

#### options

##### short
Type: `Boolean`  
Default: `false`

If true, then `elemMod` will be stored in `mod`, `modVal` and `elemVal` will be stored in `val`.

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/parse-bem-identifier
[npm-image]: http://img.shields.io/npm/v/parse-bem-identifier.svg

[travis-url]: https://travis-ci.org/floatdrop/parse-bem-identifier
[travis-image]: http://img.shields.io/travis/floatdrop/parse-bem-identifier.svg

[depstat-url]: https://david-dm.org/floatdrop/parse-bem-identifier
[depstat-image]: https://david-dm.org/floatdrop/parse-bem-identifier.svg?theme=shields.io
