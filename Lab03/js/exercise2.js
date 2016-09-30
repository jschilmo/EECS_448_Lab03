var imgNum = 0;
var movePrev = function(){
	if(imgNum == 0){
		document.getElementById("slide").src = "../img/White Sign Soapstone.png";
		imgNum++;
	}
	else if(imgNum == 1){
		document.getElementById("slide").src = "../img/Homeward Bone.png";
		imgNum++;
	}
	else if(imgNum == 2){
		document.getElementById("slide").src = "../img/Firebomb_(DSIII).png";
		imgNum++;
	}
	else if(imgNum == 3){
		document.getElementById("slide").src = "../img/Blooming Purple Moss Clump.png";
		imgNum++;
	}
	else{
		document.getElementById("slide").src = "../img/Estus Flask 1.png";
		imgNum = 0;
	}
}
var moveNext = function(){
	if(imgNum == 0){
		document.getElementById("slide").src = "../img/Blooming Purple Moss Clump.png";
		imgNum = 4;
	}
	else if(imgNum == 1){
		document.getElementById("slide").src = "../img/Estus Flask 1.png";
		imgNum--;
	}
	else if(imgNum == 2){
		document.getElementById("slide").src = "../img/White Sign Soapstone.png";
		imgNum--;
	}
	else if(imgNum == 3){
		document.getElementById("slide").src = "../img/Homeward Bone.png";
		imgNum--;
	}
	else{
		document.getElementById("slide").src = "../img/Firebomb_(DSIII).png";
		imgNum--;
	}
}