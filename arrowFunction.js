

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
    
    const n = 8;
    const arr = [55, 40, 20, 33, 21, 40, 55, 10];
    
    document.write(modifyArray(arr).toString().split(',').join(' '), "<br>");
}

