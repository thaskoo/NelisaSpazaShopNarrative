function average(str){
	var spltStr = str.split(" ");
	var average = spltStr[0].length; // declaring
	var rounding = null;
		for(var x = 1; x < spltStr.length; x++) {
			if(average > spltStr[x].length) {
				average  = spltStr[x].length;
				rounding = spltStr[x];

		}
} 
	return [average, rounding];
}