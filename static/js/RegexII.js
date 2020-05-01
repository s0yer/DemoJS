/*
     let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
*/

function regexVar() {
    
    
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])*$');
    
    return re;
}


const re = regexVar();
const s = "Mr.Jadson";

document.write("<br>","Regex II : ","<br>","<br>");
document.write(!!s.match(re));
document.write("<br>","--------------------------------------------------","<br>","<br>");