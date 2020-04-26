
var x = 21;

function factorial(n){


    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}



document.write("<br>","factorial Function: ","<br>","<br>");
document.write(factorial(x));
document.write("<br>","--------------------------------------------------","<br>","<br>");