/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
   
    let map={};
    
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=i;
    }
    
    for(let i=0;i<nums.length;i++){
        let component=target-nums[i];
        if(map[component]!==undefined&&i!==map[component]){
            return [i,map[component]];
        }
    }
    
    return [];
};

/* test */

let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums,target));
