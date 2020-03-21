
/*
 //Others ways to solve

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants.trim());
}

------------------------------------------

function vowelsAndConsonants(s) {
    [...s].forEach(c => 'aeiou'.includes(c) ?
        console.log(c) : null);
    [...s].forEach(c => 'aeiou'.includes(c) ?
        null : console.log(c));
}

--------------------------------------------

*/


s = 'easypeasy'

function vowelsAndConsonants(s) {
    let vowels = [ 'a', 'e', 'i', 'o', 'u'];
	
	// print the vowels first
	for(let v of s){
		if(vowels.includes(v)){
			console.log(v);
		}
	}
	
	// print the consonants second
	for(let v of s){
		if(!vowels.includes(v)){
			console.log(v);
		}
	}
}