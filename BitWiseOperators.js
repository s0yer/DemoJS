
function getMaxLessThanK(n, k){
    let maxab = 0;
    for(let b=n; b>0; b--){
        for(let a=b-1; a>0; a--){
            if((a&b)<k && (a&b)> maxab){
                maxab = (a&b);
            }
        }
    }
    return maxab;
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}