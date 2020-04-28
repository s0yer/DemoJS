

const word = 'easypeasy';

function vowelsAndConsonants(s) {
    let vowels = [ 'a', 'e', 'i', 'o', 'u'];
	
	// print the vowels first
	for(let v of s){
		if(vowels.includes(v)){
			document.write(v);
		}
	}
	
	// print the consonants second
	for(let v of s){
		if(!vowels.includes(v)){
			document.write(v);
		}
	}
}

document.write("<br>","Vowel and Consonant Function: ","<br>","<br>");
vowelsAndConsonants(word);
document.write("<br>","--------------------------------------------------","<br>","<br>");