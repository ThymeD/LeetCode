/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.85%)
 * Likes:    2432
 * Dislikes: 0
 * Total Accepted:    547.8K
 * Total Submissions: 1.6M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//   let str1 = x.toString()
//   let str2 = ""
//   if (str1.substr(0, 1) == '-') {
//     str2 = '-' + str1.substr(1).split('').reverse().join('')
//     console.log(str2)
//   } else {
//     str2 = str1.split('').reverse().join('')
//   }
//   let num2 = Number(str2)
//   if (num2 > Math.pow(2, 31) - 1 || num2 < -Math.pow(2, 31)) {
//     num2 = 0
//   }
//   return num2
// };

// var reverse = function(x) {
//   let result = 0
//   while (x) {
//     result = result * 10 + x % 10
//     x = (x / 10) | 0
//     console.log(result)
//   }
//   return (result | 0) === result ? result : 0
// };

var reverse = function(x) {
  let result = 0
  while (x) {
    result = result * 10 + x % 10
    x = (x / 10) | 0
  }
  return (result | 0) === result ? result : 0
};
// @lc code=end
reverse(1534236469)
