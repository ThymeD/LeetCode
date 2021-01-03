/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode-cn.com/problems/remove-element/description/
 *
 * algorithms
 * Easy (59.10%)
 * Likes:    739
 * Dislikes: 0
 * Total Accepted:    279.6K
 * Total Submissions: 473K
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 给定 nums = [3,2,2,3], val = 3,
 * 
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 * 
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 * 
 * 注意这五个元素可为任意顺序。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 
 * 请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
 * int len = removeElement(nums, val);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 113/113 cases passed (100 ms)
// Your runtime beats 12.88 % of javascript submissions
// Your memory usage beats 53.77 % of javascript submissions (37.9 MB)
// var removeElement = function(nums, val) {
//   let end = nums.length
//   let begin = 0
//   for (begin = 0; begin < end; begin++) {
//     if (nums[begin] === val) {
//       end--
//       while (nums[end] === val) {
//         end--
//       }
//       if (end <= begin) {
//         return begin
//       }
//       nums[begin] = nums[end]
//     }
//   }
//   return begin
// };

// 113/113 cases passed (84 ms)
// Your runtime beats 65.53 % of javascript submissions
// Your memory usage beats 89.32 % of javascript submissions (37.5 MB)
// var removeElement = function(nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length
// };

// 113/113 cases passed (68 ms)
// Your runtime beats 99.04 % of javascript submissions
// Your memory usage beats 90.4 % of javascript submissions (37.5 MB)
var removeElement = function(nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
};
// @lc code=end

