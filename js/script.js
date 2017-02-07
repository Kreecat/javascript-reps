var runTheJewels = ["rtj3", "muthatruckas", "rain man didn't die face down", "talk real good", "cause im smart and stuff"]

function lengths(rtj){
	var wordLength = [];
	for (i = 0; i < rtj.length; i++){
		console.log(rtj[i].length)
		wordLenght.push(rtj[i].length)
	}
	return wordLength
}


function transmogrifier(a, b, c){
	var x = (a*b);
	return Math.pow(x, c)
}
transmogrifier(5, 4, 3) = 8000
transmogrifier(13, 12, 5) = 92389579776
transmogrifier(42, 13, 7) = 14466001271480793000

var daffy = 


function toonify(accent, sentence){
	if(accent === "daffy"){
		return sentence.replace(/s/i, "th");
	} else if (accent === "elmer"){
		return sentence.replace(/r/i, "w");
	} else {
		return "please choose accent";
	}
}


function wordReverse(stuff){
	var arrayNew = stuff.split(" ");
	arrayNew.reverse();
	var retStr = "";
	for (i = 0; i < arrayNew.length; i++){
		retStr += arrayNew[i];
		if(i == arrayNew.length-1){
			console.log("Something went wrong");

		}
		else {
			retStr += ' ';
		}
	}
	return retStr;
}


function letterReverse(stuff){
	var arrayNew = (stuff)
	return (arrayNew.split("").reverse().join("").split(" ").reverse().join(" "));	
}

var runTheJewels = ["rtj3", "muthatruckas", "rain man didn't die face down", "talk real good", "cause im smart and stuff"]

function longest(lngArry){
	var long = "";
	for (i = 0; i < lngArry.length; i++){
		if (lngArry[i].length > long.length)
			long = lngArry[i];
	}
	return long;
}

function repMaster(revString, disFunc){
	return disFunc(revString) + " proves that I am the rep Master!";
}








