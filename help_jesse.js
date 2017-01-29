//https://www.codewars.com/kata/5866f10311ceec6ac10001e8

function helpJesse(array){
	var newArr = []
	array.forEach((element) => {
		if(element.note == undefined){
			newArr.push('Pour ' + element.amount + ' mL ' + 'of ' + element.solution + ' into a ' + element.instrument);
		}else{
			newArr.push('Pour ' + element.amount + ' mL ' + 'of ' + element.solution + ' into a ' + element.instrument + ' (' + element.note + ')');
		}
	});
	return newArr
}
