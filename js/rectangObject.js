

function rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a+b);
    this.area = a * b;
    
    document.write("Perimeter = " + this.perimeter);
    document.write("Area = " + this.area);
}   

const x = 21;
const y = 34;


document.write("<br>","Retangle Function: ","<br>","<br>");
rectangle(x,y)
document.write("<br>","--------------------------------------------------","<br>","<br>");