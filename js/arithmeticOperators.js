/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
const length = 33;
const width = 87;


function getArea(length, width) {
    let area;
    // Write your code here
        area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
        perimeter = 2 * (length + width)
    return perimeter;
}

document.write("<br>","Arithmetic Operators: ","<br>","<br>");
document.write(getArea(length, width),"\n","<br>");
document.write(getPerimeter(length, width),"\n","<br>");
document.write("<br>","--------------------------------------------------","<br>","<br>");