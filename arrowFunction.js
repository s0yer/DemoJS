
function modifyArray(nums) {
    var arrowFunc = function(n){
       if(n%2==0){
           return n*2;
       }else{
           return n*3;
       }
    }
    var newArr = nums.map(arrowFunc);
    return newArr;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}