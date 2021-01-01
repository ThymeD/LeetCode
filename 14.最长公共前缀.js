/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (39.02%)
 * Likes:    1400
 * Dislikes: 0
 * Total Accepted:    421.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 123/123 cases passed (88 ms)
// Your runtime beats 74.89 % of javascript submissions
// Your memory usage beats 27.84 % of javascript submissions (39.8 MB)
// var longestCommonPrefix = function(strs) {
//   const count = strs.length
//   let res = ""
//   if (count === 0) {
//     return res
//   }
//   if (count === 1) {
//     return strs[0]
//   }
//   for (let col = 0; col < strs[0].length; col++) {
//     const target = strs[0][col]
//     for (let row = 1; row < count; row++) {
//       if (strs[row][col] !== target) {
//         return res
//       }
//     }
//     res += strs[0][col]
//   }
//   return res
// };

// 123/123 cases passed (88 ms)
// Your runtime beats 74.89 % of javascript submissions
// Your memory usage beats 77.67 % of javascript submissions (39 MB)
var longestCommonPrefix = function(strs) {
  let str0 = strs[0]
  if (!str0) {
    return ''
  }
  let i = 0
  for (i = 0; i < str0.length; i++) {
    const flag = strs.every(item => {
      return item[i] == str0[i]
    })
    if (!flag) {
      break
    }
  }
  return str0.substr(0, i)
};
// @lc code=end