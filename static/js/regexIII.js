"use strict";

function regexVar() {

 /*
        Other Way:
        let re = new RegExp('\\d+', 'g');
        
     */
    let re = /\d+/g;
    return re;
}



const rex = regexVar();
const sst = "1.1235813";
const r = sst.match(rex);



document.write("<br>","Regex III : ","<br>","<br>");
document.write(!!sst.match(rex),"<br>");
for (const elem of r) {
   document.write(elem);
}
document.write("<br>","--------------------------------------------------","<br>","<br>");
