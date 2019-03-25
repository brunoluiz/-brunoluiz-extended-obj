# @brunoluiz/extended-obj

Extended objects for JavaScript

## KeyValue

Create a key-value map with extra methods, such as

- `getByValue(v: any)`: returns value's key
- `keys()`: returns object keys
- `values()`: returns object values

```js
const { KeyValue } = require('@brunoluiz/extended-obj')
const o = KeyValue({ FOO: 'BAR' })

console.log(o.FOO) // BAR (normal object behaviour)
console.log(o.getByValue('BAR')) // FOO (returns value key)
console.log(o.values()) // ['BAR']
console.log(o.keys()) // ['FOO']
```

## Enum

Create an enum with the same extras added on `KeyValue`

```js
const { Enum } = require('@brunoluiz/extended-obj')
const e = Enum(['FOO', 'BAR'])

console.log(e.FOO) // 1
console.log(e.getByValue(1)) // 'FOO'
```
