

function getSecondLargest(nums) {

    var f = 0;
    var s = 0;

    for(let i = 0; i < nums.length; i++){
    
    // to get the largest number -> f
        if(nums[i] > f){
            s = f;
            f = nums[i];
        }
    // to find the second largest number -> s
    
        
        
        if(nums[i] > s && nums[i] < f){
            s = nums[i];
        }
    }
    return s;
}