# insensitive

Make sure anything you are working with becomes lowercase alphanumeric characters:

```js
import insensitive from 'insensitive';

const obj = insensitive();
console.log(obj.hello);  // undefined
obj.heL_Lo = 'world';
console.log(obj.hello);  // 'world'
obj.hello = 'bye';
console.log(obj.hello);  // 'bye'

for (let key in obj) {
  console.log(key);  // 'hello'
}
Object.keys(obj); // ['hello']
```
