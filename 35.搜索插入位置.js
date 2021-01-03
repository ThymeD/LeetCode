/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (46.92%)
 * Likes:    779
 * Dislikes: 0
 * Total Accepted:    297.5K
 * Total Submissions: 633.9K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 62/62 cases passed (96 ms)
// Your runtime beats 16.54 % of javascript submissions
// Your memory usage beats 68.12 % of javascript submissions (38.7 MB)
// var searchInsert = function(nums, target) {
//   let i = 0
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i
//     }
//   }
//   return i
// };

// 62/62 cases passed (84 ms)
// Your runtime beats 61.61 % of javascript submissions
// Your memory usage beats 79.6 % of javascript submissions (38.6 MB)
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1
  while (left <= right) {
    middle = (left + right) >>> 1
    if (nums[middle] === target) {
      return middle
    }
    if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
};
// @lc code=end

