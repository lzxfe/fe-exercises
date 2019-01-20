function produceRandom(){
	var code = [];
	for(var i=49;i<=122;i++){
		if((i>=58&&i<=64)||(i>=91&&i<=96))
			continue;
		code.push(i);
	}
	var randomCode = "";
	for(var i=0;i<4;i++){
		randomCode += String.fromCharCode(code[Math.floor((Math.random()*code.length))]);		
	}
	document.getElementById("firstProject").innerHTML=randomCode
	//alert(randomCode);
}

function changeColor(){
	var ul=document.getElementById("changeColor").children;
	for(var i=0;i<ul.length;i++){
		if(i%2==0){
			ul[i].setAttribute("style","background-color:red");
		}else{
			ul[i].setAttribute("style","background-color:blue");
		}
	}
}

// 批注：关于函数方法定义，建议将旧数组作为参数传入函数，并返回去重后的新数组

//set去重
// 批注：new Set(arr)之后返回的是一个可遍历的对象，需要将可遍历的对象重新转化为数组
function duplicateRemoval1(list){
	// var list = [1,2,2,3,5,8,3,5];
	var set = new Set(list)
	var newArr = [...set]
	return newArr
	// var result = "";
	// for( var i of set)
	// 	result +=i+" "
	// alert(result);
}
//数组下标去重
function duplicateRemoval2(list){
	// var list = [1,2,2,3,5,8,3,5];
	var result = [];
	for(var i = 0; i < list.length; i++){
		if(list.indexOf(list[i]) == i)
			result.push(list[i]);
	}
	return newArr
	// alert(result);
}

//排序相邻去重
// 批注：arr.sort()排序的方法：默认排序顺序是根据字符串Unicode码点。
function duplicateRemoval3(list){
	// var list = [1,2,2,3,5,8,3,5];
	list.sort((a, b) => a - b);
	var result = [];
	result.push(list[0]);
	for(var i =1; i < list.length; i++){
		if(list[i] != list[i-1])
			result.push(list[i]);
	}
	// alert(result);
	return result
}
