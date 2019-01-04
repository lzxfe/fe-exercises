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
//set去重
function duplicateRemoval1(){
	var list = [1,2,2,3,5,8,3,5];
	var set = new Set(list);
	var result = "";
	for( var i of set)
		result +=i+" "
	alert(result);
}
//数组下标去重
function duplicateRemoval2(){
	var list = [1,2,2,3,5,8,3,5];
	var result = [];
	for(var i =0; i < list.length; i++){
		if(list.indexOf(list[i]) == i)
			result.push(list[i]);
	}
	alert(result);
}
//排序相邻去重
function duplicateRemoval3(){
	var list = [1,2,2,3,5,8,3,5];
	list.sort();
	var result = [];
	result.push(list[0]);
	for(var i =1; i < list.length; i++){
		if(list[i] != list[i-1])
			result.push(list[i]);
	}
	alert(result);
}
