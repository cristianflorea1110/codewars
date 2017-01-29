//https://www.codewars.com/kata/523f5d21c841566fde000009
function array_diff(a, b) {
  var check = a.filter(function(c){
		if(c != b){
			return true;
		}
	})
	return check;
}
