function range(start, end, step){
	var arr = [];
	var result = 0;
	var steps = step || 1;
	if(step < 0){
		for(var j = start; j >= end; j += step){
			arr.push(j);
		}
		(function sum2(arr){
			result = arr.reduce((x, y) => {
				return x + y;
			})
		}(arr));
		return arr && result;
	}
	for(var i = start; i <= end; i+= steps){
		arr.push(i);
	}
	(function sum(arr){
		result = arr.reduce((x, y) => {
			return x + y;
		});
	}(arr));
	return arr && result;
}
