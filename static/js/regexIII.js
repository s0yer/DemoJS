
function regexVar() {

 /*
        Other Way:
        return new RegExp('\\d+', 'g');

        let re = /\d+/g;
        return re;
     */
  let re = new RegExp('\\d+', 'g');
   return re;
}



const re = regexVar();
const s = "1.1235813";
const r = s.match(re);

//document.write(!!s.match(re));

document.write("<br>","Regex II : ","<br>","<br>");
for (const e of r) {
    document.write(e);
}
document.write("<br>","--------------------------------------------------","<br>","<br>");
