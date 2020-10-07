
function validateForm()
{
	var iChars = "[!@#$%^&*()+=\\-\\[\\]\\\';,./{}|\":<>?]{1}";
	var a = document.forms["Form"]["name"].value;
	if(a == ""){
			alert("Please Enter or Check the Name");
			document.getElementById("name").focus();
	 	 	return false;
	}
	else if(a.length < 3){
			alert("Please Enter a Valid Name");
			document.getElementById("name").focus();
	 		return false;
	}
	else if(!isNaN(a)){
			alert("Name cannot have Numbers");
			document.getElementById("name").focus();
			return false;
	}
	else if (a.search(iChars) != -1){
			alert("Name cannot  have special characters");
			document.getElementById("name").focus();
			return false;
	}

	var y =document.forms["Form"]["dob"].value;
	if(y == ""){
		alert("Please Enter Date of Birth");
		document.getElementById("dob").focus();
		return false;
	}

	var c =document.forms["Form"]["user_email"].value;
	if(c == ""){
		alert("Please Enter or check the Email");
		document.getElementById("mail").focus();
		}else
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(c.match(mailformat))
        {
		document.Form.user_email.focus();
        //return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.Form.user_email.focus();
        return false;
        }

	}

	var cd = "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{7,15}$/" ;
	var d =document.forms["Form"]["user_password"].value;
	if(d == ""){
		alert("Please enter the password");
		document.getElementById("password").focus();
		return false;
	}
	else if(d.length < 8){
		alert("Password must be 8 characters long");
		document.getElementById("password").focus();
		return false;
	}

	else if( !d.match(/[0-9]/)){
		alert("Password must have an number");
		document.getElementById("password").focus();
		return false;
	}


	var iChars = "[!@#$%^&*()+=\\-\\[\\]\\\';,./{}|\":<>?]{1}";
	var e = document.forms["Form"]["father_name"].value;
	if(e == ""){
			alert("Please Enter or Check the Father Name");
			document.getElementById("father_name").focus();
	 	 	return false;
	}
	else if(e.length < 3){
			alert("Please Enter a Valid Father Name");
			document.getElementById("father_name").focus();
	 		return false;
	}
	else if(!isNaN(e)){
			alert("Father Name cannot have Numbers");
			document.getElementById("father_name").focus();
			return false;
	}
	else if (e.search(iChars) != -1){
			alert("Father Name cannot  have special characters");
			document.getElementById("father_name").focus();
			return false;
	}


	var iChars = "[!@#$%^&*()+=\\-\\[\\]\\\';,./{}|\":<>?]{1}";
	var f = document.forms["Form"]["mother_name"].value;
	if(f == ""){
			alert("Please Enter or Check the Mother Name");
			document.getElementById("mother_name").focus();
	 	 	return false;
	}
	else if(f.length < 3){
			alert("Please Enter a Valid Mother Name");
			document.getElementById("mother_name").focus();
	 		return false;
	}
	else if(!isNaN(f)){
			alert("Mother Name cannot have Numbers");
			document.getElementById("mother_name").focus();
			return false;
	}
	else if (f.search(iChars) != -1){
			alert("Mother Name cannot  have special characters");
			document.getElementById("mother_name").focus();
			return false;
	}

	var g = document.forms["Form"]["pan_number"].value;
	if(g == "" || g.length >10 || g.length<10){
		alert("Please Enter the PAN Number Or Check the PAN Number");
		return false;
	}else if((g.search(iChars) != -1)){
		alert("PAN number cannot  have special characters");
		document.getElementById("pan_number").focus();
		return false;
	}

	var h = document.forms["Form"]["aadhar_number"].value;
	if(h == "" ||h.length >12 || h.length<12 ){
		alert("Please Enter the Aadhar Number or Check the Aadhar number");
		return false;
	}else if(isNaN(h)) {
		alert("Please check the Aadhar Number");
		return false;
	}

	var i = document.forms["Form"]["martial_status"].options.value;
	if(i == 1 ){
		alert("Please Enter the Martial Status");
		return false;
	}

	// var j = document.forms["Form"]["age"].value;
	// if(j == "" ){
	// 	alert("Please Enter the Age");
	// 	document.getElementById("age").focus();
	// 	return false;
	// }

	var t = document.getElementById("Address").value;
	if (t == ""){
		alert("Enter the Address");
	 	return false;
	}

	var l = document.forms["Form"]["door_no"].value;
	if(l == "" ){
		alert("Please Enter the Door No");
		return false;
	}else if(isNaN(l)) {
		alert("Please check the Door Number");
		return false;
	}

	var m = document.forms["Form"]["street"].value;
	if(m == "" ){
			alert("Please Enter the Street");
			return false;
	}

	var iChars = "[!@#$%^&*()+=\\-\\[\\]\\\';,./{}|\":<>?]{1}";
	var n = document.forms["Form"]["district"].value;
	if(n == ""){
		alert("Please Enter the District");
		return false;
	}
	else if(!isNaN(n) || n.search(iChars) != -1){
		alert("Please enter a valid District Name")
	}

	var pc = document.getElementById("Pincode").value
	if(isNaN(pc) || pc == "" || pc.length < 6 || pc.length > 6) {
		alert("Please check the Pincode");
		return false;
	}


	var result = document.getElementById('states').value;
	if (result == "0") {
		alert("Please Select the State");
	}

	var pn = document.getElementById("Phone_Number").value
	if(isNaN(pn) || pn == "" || pn.length < 10 || pn.length > 10) {
		alert("Please check the Phone Number");
		return false;
	}
	var fileInput = document.getElementById('photo');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
	if(document.forms["Form"]["photo"].value == 0){
		alert("Please Upload a Image");
		return false;
	}else if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png only.');
        fileInput.value = '';
        return false;
    }

}


//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>