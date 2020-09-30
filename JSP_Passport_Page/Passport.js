
function validateForm()
{
	var a = document.forms["Form"]["name"].value;
	if(a == ""  ){
		alert("Please Enter the Name");
		return false;
	}else if(a.length < 3){
		alert("Please Enter a Valid Name");
		return false;
		
	}
	
	var b =document.forms["Form"]["gender"].value;
	if(b == ""){
		alert("Please Select the Gender");
		return false;
		
	}
	
	var y =document.forms["Form"]["dob"].value;
	if(y == ""){
		alert("Please Enter Date of Birth");
		return false;
	}
		
	
	var c =document.forms["Form"]["user_email"].value;
	if(c == ""){
		alert("Please Enter or check the Email")
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
	
	var d =document.forms["Form"]["user_password"].value;
	if(d == ""){
		alert("Please enter the password");
		return false;
	}
	
	var e = document.forms["Form"]["father_name"].value;
	if(e == "" ){
		alert("Please Enter the  Father Name");
		return false;
	}
	
	var f = document.forms["Form"]["mother_name"].value;
	if(f == "" ){
		alert("Please Enter the Mother Name");
		return false;
	}
	
	var g = document.forms["Form"]["pan_number"].value;
	if(g == "" || g.length >10 || g.length<10){
		alert("Please Enter the PAN Number Or Check the PAN Number");
		return false;
	}
	
	var h = document.forms["Form"]["aadhar_number"].value;
	if(h == "" ||h.length >12 || h.length<12 ){
		alert("Please Enter the Aadhar Number or Check the Aadhar number");
		return false;
	}
	
	var i = document.forms["Form"]["martial_status"].value;
	if(i == "" ){
		alert("Please Enter the Martial Status");
		return false;
	}
	
	var j = document.forms["Form"]["age"].value;
	if(j == "" ){
		alert("Please Enter the Age");
		return false;
	}
	
	var k = document.forms["Form"]["Address"].value;
	if(k == "" ){
		alert("Please Enter the Address");
		return false;
	}
	
	var l = document.forms["Form"]["door_no"].value;
	if(l == "" ){
		alert("Please Enter the Door No");
		return false;
	}
	
	var m = document.forms["Form"]["street"].value;
	if(m == "" ){
		alert("Please Enter the Street");
		return false;
	}
	var n = document.forms["Form"]["district"].value;
	if(n == "" ){
		alert("Please Enter the District");
		return false;
	}
	var o = document.forms["Form"]["state"]["#none"].value;
	if(o == "" ){
		alert("Please select the State");
		return false;
	}
}

