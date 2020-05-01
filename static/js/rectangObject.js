

function Rectangle(a, b) {
    
    let lg = a;
    let width = b;
    let perimeter = 2 * (a+b);
    let area = a * b;
    
    document.write("Length = " + lg, "<br>");
    document.write("Width = " + width, "<br>");
    document.write("Perimeter = " + perimeter, "<br>");
    document.write("Area = " + area);
    
    return 1;
}   


var x = 21;
var y = 34;


document.write("<br>","Retangle Function: ","<br>","<br>");
Rectangle(x,y);
document.write("<br>","--------------------------------------------------","<br>","<br>");