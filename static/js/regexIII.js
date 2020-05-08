
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
var r = sst.match(rex);



document.write("<br>","Regex III : ","<br>","<br>");
document.write(!!sst.match(rex),"<br>");
for (const e of r) {
   document.write(e);
}
document.write("<br>","--------------------------------------------------","<br>","<br>");
