# @\_apparatus\_/css-tools

[![bundle size](https://deno.bundlejs.com/?q=@_apparatus_/css-tools&badge=detailed)](https://bundlejs.com/?q=@_apparatus_/css-tools)

A small set of tools to deal with different aspects of CSS.

## Installation

```sh
npm install @_apparatus_/css-tools
```

## Examples

### Combine classes

```typescript
import { cx } from '@_apparatus_/css-tools'

// join classes
cx('foo', 'bar') // => 'foo bar'

// filter non-string values
cx('foo', undefined, null, false, true, 0, 1, 2n, 'bar') // => 'foo        bar'

// handle arrays
cx(['foo', ['bar', ['baz']]]) // => 'foo bar baz'

// handle objects
cx({ foo: true, bar: false, baz: 1 }) // => 'foo baz'

// mix and match
cx(false && 'foo', ['bar', { baz: true, qux: 0 }]) // => ' bar baz'
```
