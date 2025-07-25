export type Class = undefined | null | boolean | number | bigint | string | Class[] | { [_ in string]: unknown }

/**
 * Join css classes in strings, arrays, and objects.
 *
 * Arrays are joined and flattened recursively.
 * Objects keys are used as classes, keys are added if the value is truthy.
 *
 * Non string values are ignored.
 *
 * @param classes Classes to join.
 */
export const cx = (...classes: Class[]): string =>
    classes
        .map(c => {
            if (typeof c === 'string') return c
            if (Array.isArray(c)) return cx(...c)
            if (typeof c === 'object' && c)
                return Object.keys(c)
                    .filter(k => c[k])
                    .join(' ')
            return ''
        })
        .join(' ')
