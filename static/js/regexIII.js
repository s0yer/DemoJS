
function regexVar() {

 /*
        Other Way:
        return new RegExp('\\d+', 'g');

     */
    
    let re = /\d+/g;
    return re;
}

s = '1.1235813';

const re = regexVar();
const s = readLine();
    
const r = s.match(re);
    
document.write(r);