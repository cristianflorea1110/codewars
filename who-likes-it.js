//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript

function likes(names){
  var length = names.length - 2;
  if(names.length === 0){
    return 'no one likes this';
  }else if(names.length == 1){
    return names + ' likes this';
  }else if(names.length == 2){
    return names[0] + ' and ' + names[1] + ' like this';
  }else if(names.length == 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
  }else if(names.length > 3){
    return names[0] + ', ' + names[1] + ' and ' + length + ' others like this';
  }
}

likes([]);// 'no one likes this');
likes(['Peter']);// 'Peter likes this');
likes(['Jacob', 'Alex']);// 'Jacob and Alex like this');
likes(['Max', 'John', 'Mark']);// 'Max, John and Mark like this');
likes(['Alex', 'Jacob', 'Mark', 'Max']);// 'Alex, Jacob and 2 others like this');
