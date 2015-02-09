document.body.style.backgroundColor = "#ADD8E6";
alert(document.title);

function IsValidEmail(email) {
	var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return expr.test(email);
};

function ValidateEmail() {
	var email = document.getElementById("txtEmail").value;
	if (!IsValidEmail(email)) {
		alert("Invalid email address.");
	}
	else {
		alert("Valid email address.");
	}
};

var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function(){
		if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200){
		console.log(xmlhttp2.responseText);
		}
};

xmlhttp2.open("GET", "http://private-40e0f-smugui2015.apiary-mock.com/assignments/4", true);
xmlhttp2.send();
