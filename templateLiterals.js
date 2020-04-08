
		
function sides(literals, ...expressions) {
    let a = expressions[0];
    let p = expressions[1];
    var ans = [];
    var s1 = (p+Math.sqrt(Math.pow(p,2)-16*a))/4;
    var s2 = (p-Math.sqrt(Math.pow(p,2)-16*a))/4;

    ans.push(s1);
    ans.push(s2);

    return ans.sort();
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}