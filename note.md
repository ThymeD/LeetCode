# LeetCode 笔记
​    [git仓库地址](https://github.com/ThymeD/LeetCode)

## 7.整数反转.js

### 数字取整`num | 0`

```js
console.log(12.3 / 0)  // 12
console.log(-12.3 / 0) // -12
```

### 判断某个数是否为32位有符号数`(num | 0) === num`

```js
console.log((2147483647 | 0) === 2147483647)    // true
console.log((2147483648 | 0) === 2147483648)    // false
console.log((-2147483648 | 0) === -2147483648)  // true
console.log((-2147483649 | 0) === -2147483649)  // false
console.log(2147483648 | 0)                     // -2147483648
console.log(-2147483649 | 0)                    // 2147483647
```