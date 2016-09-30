var backgroundChange = function(){
	var r = document.getElementById("red").value;
	var g = document.getElementById("green").value;
	var b = document.getElementById("blue").value;

	document.getElementById("text").style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

var borderChange = function(){
	var r = document.getElementById("redb").value;
	var g = document.getElementById("greenb").value;
	var b = document.getElementById("blueb").value;
	var w = document.getElementById("width").value;

	document.getElementById("text").style.borderStyle = "solid";
	document.getElementById("text").style.borderColor = 'rgb('+r+','+g+','+b+')';
	document.getElementById("text").style.borderWidth = w;
}