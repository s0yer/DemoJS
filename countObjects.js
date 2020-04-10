/*'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
*/
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(function(o){return o.x==o.y}).length
}

/*
Other way to solve:

function getCount(objects) {
    var count = 0;
    for(var i=0; i<objects.length; i++){
      if(objects[i].x == objects[i].y) {
        count++;
      }
    }
    return count;
}



function main() {
    const n = +(readLine());
    let objects = [(4,8), (8,16)];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }

    
}
*/
let objects = [(x:4, y:8), (x:8,y:16)];

document.write(getCount(objects));