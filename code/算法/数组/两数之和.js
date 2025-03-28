// 哈希表解法 O(n)
function twoSum(nums, target) {
    // 维护一个 Map，键存储 nums[i] 的值，值存储索引。
    const map = new Map();
    
    // 遍历 nums，每次检查 target - nums[i] 是否已在 Map 中。
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) { // 若存在，返回索引；
            return [map.get(complement), i]
        }
        // 否则，存入 Map 以备后续查询
        map.set(nums[i], i);
    }
    return []
}

// 示例
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
