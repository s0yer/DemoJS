class Rectang{
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

}
 // method to the Rectangle class' prototype
    Rectang.prototype.area = function(w, h){
        return (this.w*this.h);
    }

    
// Square class that inherits from Rectangle and implement its //class constructor

class Squar extends Rectang{
    constructor(s){
        super(s);
        this.h = s;
        this.w = s;
    }
}


const rec = new Rectang(3,4);
const sqr = new Squar(3);


document.write("<br>","Objects and Inheritance: ","<br>","<br>");
document.write(rec.area(), "<br>");
document.write(sqr.area(), "<br>");
document.write("<br>","--------------------------------------------------","<br>","<br>");
    
