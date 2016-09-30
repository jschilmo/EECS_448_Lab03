var x = function(){
	var pass1val = document.getElementById("pass1").value;
	var pass2val = document.getElementById("pass2").value;
	if(pass1val == pass2val)
		alert("Passwords match!");
	else
		alert("Passwords don't match. Try again.");
}
