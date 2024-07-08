/**
 * 两数求和问题
 *
 * 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例: 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 * */

/**
 * 当发现代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环。
 * 因为两层循环很多情况下都意味着 O(n^2) 的复杂度，这个复杂度非常容易导致你的算法超时。
 * 即便没有超时，在明明有一层遍历解法的情况下写了两层遍历，面试官对你的印象分会大打折扣。
 *
 * 几乎所有的求和问题，都可以转化为求差问题。
 *
 * 我们可以在遍历数组的过程中，增加一个 Map 来记录已经遍历过的数字及其对应的索引值。
 * 然后每遍历到一个新数字的时候，都回到 Map 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。
 * 若出现过，那么答案已然显现，我们就不必再往下走了。
 * */

/**
 * 以 nums = [2, 7, 11, 15] 这个数组为例，
 * 第一次遍历到 2，此时 Map 为空，
 * 以 2 为 key，索引 0 为 value 作存储，继续往下走；遇到了 7，
 * 计算 targetNum 和 7 的差值为2，去 Map 中检索 2 这个 key，发现是之前出现过的值。
 *
 * 键值对存储我们可以用 ES6 里的 Map 来做，如果图省事，直接用对象字面量来定义也没什么问题。
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  // 这里我用对象来模拟 map 的能力
  const diffs = {}
  // 缓存数组长度
  const len = nums.length
  // 遍历数组
  for(let i=0;i<len;i++) {
    // 判断当前值对应的 target 差值是否存在（是否已遍历过）
    if(diffs[target-nums[i]]!==undefined) {
      // 若有对应差值，那么答案get！
      return [diffs[target - nums[i]], i]
    }
    // 若没有对应差值，则记录当前值
    diffs[nums[i]]=i
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumByMap = function(nums, target) {
  const diffs = new Map()
  const len = nums.length

  for (let i = 0; i < len; i++) {
    const diff = target - nums[i]

    if (diffs.has(diff)) {
      return [diffs.get(diff), i]
    }

    diffs.set(nums[i], i)
  }
}
