/*
     let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
*/

function regexVar() {
    
    
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])*$');
    
    return re;
}

function main() {
    const re = regexVar();
    const s = 'Mr.Jadson';
    
    document.write(!!s.match(re));
}