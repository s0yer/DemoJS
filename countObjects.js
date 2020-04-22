
function getCount(objects) {
    return objects.filter(function(o){return o.x==o.y}).length
}

let objects = [(4,8), (8,16), (8,50)];

document.write("<br>","Count Object: ","<br>","<br>");
document.write(getCount(objects));
document.write("<br>","--------------------------------------------------","<br>","<br>");