
/*
// Others ways to solve

function getGrade(score) {
    return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}

*/


var score = 20;

function getGrade(score) {
    
    if( 0 <= score <= 30){
        if(score <=5){
			return 'F';
		}else if(score <= 10){
			return 'E';
		}else if(score <= 15){
			return 'D';
		}else if(score <= 20){
			return 'C';
		}else if(score <= 25){
			return 'B';
		}else 
			return 'A';
    }else{
        console.log('Digite um valor entre 0 e 30');
		return 0
    }	
}

document.write("<br>","If Else Statement: ","<br>","<br>");
document.write(getGrade(score), "<br>");
document.write("<br>","--------------------------------------------------","<br>","<br>");