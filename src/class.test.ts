import assert from 'node:assert/strict'
import { test } from 'node:test'
import { cx } from './class.ts'

test('join classes', () => {
    assert.equal(cx(), '')
    assert.equal(cx('foo'), 'foo')
    assert.equal(cx('foo', 'bar'), 'foo bar')
    assert.equal(cx('foo', 'bar', 'baz'), 'foo bar baz')
})

test('ignores non-strings', () => {
    assert.match(cx(undefined, null, false, true, 0, 1, 2n), /\s*/)
    assert.match(cx('foo', undefined, false, 0, 'bar'), /foo(\s)+bar/)
})

test('handle arrays', () => {
    assert.equal(cx([]), '')
    assert.equal(cx(['foo']), 'foo')
    assert.equal(cx('foo', ['bar']), 'foo bar')
    assert.equal(cx(['foo', ['bar', [['baz']]]]), 'foo bar baz')
})

test('handle objects', () => {
    assert.equal(cx({ foo: true, bar: false }), 'foo')
    assert.equal(cx({ foo: 0, bar: 1 }), 'bar')
    assert.equal(cx('foo', { bar: '1', baz: 2n }), 'foo bar baz')
})

test('handle combinations', () => {
    assert.equal(cx('foo', ['bar', { baz: true }], { qux: false, quux: true }), 'foo bar baz quux')
})
