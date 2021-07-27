
function twoSum(nums, target) {
    const comp = new Map();
    const len = nums.length;

    for(let i = 0; i < len; i++) {
        if(comp[nums[i]] >= 0){
            return [comp[nums[i]],i];
        }
        comp[target - nums[i]] = i;
        console.log(i, "->",comp);
    }

    return [];
}

const nums = [2,7,11,15];
console.log(twoSum(nums,18));
