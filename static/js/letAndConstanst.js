

function letConst(z){
    
    let area = 0;
    let perimeter = 0;
    var r = 89;
    const PI = Math.PI;
    

    area = PI * Math.pow(r, 2);
    perimeter = 2 * PI * r;

    document.write("Area = " + area, "<br>");
    document.write("Perimetro = " + perimeter, "<br>");

    try {

        PI = 0;
        document.write(PI);
        z=35505;
        
    } catch(Error) {

        document.write("You correctly declared PI as a constant. ");
        z=PI;
    }
    
    return z;
}

var k = 0;
document.write("<br>","let-const Function: ","<br>","<br>");
document.write(letConst(k));
document.write("<br>","--------------------------------------------------","<br>","<br>");