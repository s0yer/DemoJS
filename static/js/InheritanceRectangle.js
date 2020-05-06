class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    
     // method to the Rectangle class' prototype
    Rectangle.area = function(){
        return (this.w*this.h);
    }
    
}


 // Square class that inherits from Rectangle and implement its //class constructor

class Square extends Rectangle{
    constructor(s){
        super(s);
        this.h = s;
        this.w = s;
    }
}

rec = new Rectangle(3, 4);
sqr = new Square(3);

document.write("<br>","Objects and Inheritance: ","<br>","<br>");
document.write(rec.area());
document.write(sqr.area());
document.write("<br>","--------------------------------------------------","<br>","<br>");