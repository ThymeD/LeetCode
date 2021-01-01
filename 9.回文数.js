/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (58.62%)
 * Likes:    1351
 * Dislikes: 0
 * Total Accepted:    527.8K
 * Total Submissions: 900.3K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 11510/11510 cases passed (236 ms)
// Your runtime beats 33.61 % of javascript submissions
// Your memory usage beats 86.86 % of javascript submissions (46.3 MB)
var isPalindrome = function(x) {
  return (String(x).split('').reverse().join('')) == (String(x))
};

// 11510/11510 cases passed (192 ms)
// Your runtime beats 95.51 % of javascript submissions
// Your memory usage beats 37.34 % of javascript submissions (46.9 MB)
// var isPalindrome = function(x) {
//   let str = x.toString().split('')
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] != str[j]) {
//       return false
//     }
//   }
//   return true
// };
// @lc code=end

