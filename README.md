# @\_apparatus\_/css-tools

[![bundle size](https://deno.bundlejs.com/?q=@_apparatus_/css-tools&badge=detailed)](https://bundlejs.com/?q=@_apparatus_/css-tools)

A small set of tools to deal with different aspects of CSS.

## Installation

```sh
npm install @_apparatus_/css-tools
```

## Features

-   🎨 **Combine classes** - Flexible way to join multiple class names
-   📦 **Tiny bundle** - Minimal footprint with no dependencies

## Examples

```ts
import { cx } from '@_apparatus_/css-tools'

// Simple class joining
cx('foo', 'bar') // => 'foo bar'

// Filter non-string values
cx('foo', undefined, null, false, 'bar') // => 'foo bar'
cx('foo', true, 'bar') // => 'foo bar'
cx('foo', 0, 1, 2n, 'bar') // => 'foo bar'

// Using logical operators
const isActive = true
const isDisabled = false
const hasError = true
cx('button', isActive && 'active', isDisabled && 'disabled') // => 'button active'
cx('input', hasError ? 'error' : 'no-error') // => 'input error'

// Array flattening
cx(['foo', 'bar', 'baz']) // => 'foo bar baz'
cx('foo', ['bar', ['baz', 'qux']]) // => 'foo bar baz qux'
cx(...['foo', false, 'bar', undefined, 'baz']) // => 'foo bar baz'

// Object handling
cx({ foo: true, bar: false, baz: true }) // => 'foo baz'
cx({ foo: 1, bar: 0, baz: 'yes' }) // => 'foo baz'

// Combining objects with strings
cx('base', { active: true, disabled: false }) // => 'base active'
```
