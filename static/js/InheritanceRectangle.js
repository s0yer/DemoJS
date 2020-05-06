class Rectangle{
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

}
 // method to the Rectangle class' prototype
    Rectangle.prototype.area = function(){
        return (this.w*this.h);
    }

const area = new Rectangle(800,900);
  
    
// Square class that inherits from Rectangle and implement its //class constructor

class Square extends Rectangle{
    constructor(s){
        super(s);
        this.h = s;
        this.w = s;
    }
}


const rec = new Rectangle(3, 4);
const sqr = new Square(3);

document.write("<br>","Objects and Inheritance: ","<br>","<br>");
document.write(rec.area(), "<br>");
document.write(sqr.area(), "<br>");
document.write("<br>","--------------------------------------------------","<br>","<br>");
    
