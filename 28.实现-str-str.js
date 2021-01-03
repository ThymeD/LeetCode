/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 *
 * https://leetcode-cn.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (39.59%)
 * Likes:    660
 * Dislikes: 0
 * Total Accepted:    275.3K
 * Total Submissions: 695.5K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * 实现 strStr() 函数。
 * 
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置
 * (从0开始)。如果不存在，则返回  -1。
 * 
 * 示例 1:
 * 
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 
 * 
 * 说明:
 * 
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 78/78 cases passed (84 ms)
// Your runtime beats 71.23 % of javascript submissions
// Your memory usage beats 98.42 % of javascript submissions (37.4 MB)
// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle)
// };

// 78/78 cases passed (72 ms)
// Your runtime beats 97.6 % of javascript submissions
// Your memory usage beats 55.09 % of javascript submissions (38.5 MB)
var strStr = function(haystack, needle) {
  if (needle == "") {
    return 0
  }
  let hlen = haystack.length
  let nlen = needle.length
  for (let i = 0; i <= hlen - nlen; i++) {
    if (haystack.substr(i, nlen) == needle) {
      return i
    }
  }
  return -1
};
// @lc code=end

