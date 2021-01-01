/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.51%)
 * Likes:    2068
 * Dislikes: 0
 * Total Accepted:    492.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 91/91 cases passed (84 ms)
// Your runtime beats 69.5 % of javascript submissions
// Your memory usage beats 81.15 % of javascript submissions (37.8 MB)
var isValid = function(s) {
  const stack = []
  const hash = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  let reb = true
  for (let i = 0; i < s.length; i++) {
    let element = s[i]
    if (element == '(' || element == '{' || element == '[') {
      stack.push(element)
    } else {
      const target = stack.pop()
      if (!target || hash[element] != target) {
        return false
      }
    }
  }
  return reb && stack.length == 0
};

// var isValid = function(s) {
//   const cache = []
//   const map = new Map()
//   map.set("(", ")")
//   map.set("[", "]")
//   map.set("{", "}")
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) cache.push(s[i])
//     else {
//       if (cache.length === 0) return false
//       if (map.get(cache[cache.length - 1]) === s[i]) cache.pop()
//       else return false
//     }
//   }
//   if (cache.length) return false
//   return true
// };
// @lc code=end
