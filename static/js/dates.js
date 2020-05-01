


function getDayName(dateString) {
   
    let d = new Date(dateString);

    const options = {
        weekday: 'long';
    };

    return new Intl.DateTimeFormat('en-Us', options).format(d);
}

/*
function main() {
    
    
    
        const date = '04/09/2020';
        
        document.write((getDayName(date));
    }
}
*/
var s = 04/09/2020;

document.write("<br>","Date Function: ","<br>","<br>");
document.write((getDayName(s));
document.write("<br>","--------------------------------------------------","<br>","<br>");