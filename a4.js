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