<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<link href="Passport_Design.css" rel="stylesheet" type="text/css">
<script src="Passport.js"></script>
<head>
<meta charset="ISO-8859-1">
<title>Passport Home</title>
</head>
<body>
    
<div class="Header", style="font-family: Verdana, Geneva, Tahoma, sans-serif;">  
    <svg class="Header-Rectangle">
        <rect id="Header-Rectangle" rx="0" ry="0" x="0" y="0" width="1280" height="90">
        </rect>
    </svg>
    <div id="Passport_Seva">
        <span>Passport Seva</span>
    </div>
    <div id="Logo">
        <svg class="Circle">
            <ellipse id="Circle" rx="11.5" ry="11.5" cx="11.5" cy="11.5">
            </ellipse>
        </svg>
        <svg class="Triangle" viewBox="0 0 37 31">
            <path id="Triangle" d="M 18.49999809265137 0 L 37 31 L 0 31 Z">
            </path>
        </svg>
    </div>
    <a  href="Home.jsp" div id="Home">
        <span>Home</a></span>
    </div>
    <a href ="About_us.jsp" div id="About_Us">
        <span>About Us</a></span>
    </div>
    <div id="Passport_Offices">
        <span>Passport Offices</span>
    </div>
    <div id="Contact_Us">
        <span>Contact Us</span>
    </div>
    <div id="Ministry_of_External_Affairs_G">
        <span>Ministry of External Affairs, Government of India</span>
    </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <marquee>Welcome to Passport Seva. Apply for Passport here and Get it within 1 month after Applied.Operations at select Passport Seva Kendra (PSKs) and Post Office Passport Seva Kendras (POPSKs) have been resumed. Please refer the list of operational PSKs and POPSKs in the Latest News Section. Applicants may reschedule their appointments to the nearest operational PSK/POPSK to avail the services.  </marquee>

    <form name ="Form" action="Registered.jsp" onsubmit= " return validateForm()" method="post" >
  
        <h1>Passport Registration</h1>
        
        <fieldset>
          <legend><span class="number">1</span>Required Details</legend>
          <label class = "required" for="name">Name:</label>
          <input type="text" id="name" placeholder="Name" name="name">
    
          <label class = "required" for="Gender">Gender:</label>
          <input type="radio" name="gender" value="male" checked>Male<br>
          <input type="radio" name="gender" value="female" checked>Female<br>
          <br>
          
          <label class="required" for="DOB" > Date of Birth:</label>
          <input type="date" id="dob" placeholder="(dd/mm/yyyy)" name = "dob">
    
          <label class="required" for="mail">Email:</label>
          <input type="email" id="mail" name="user_email" placeholder="Email">
          
          <label class = "required" for="password">Password:</label>
          <input type="password" id="password" name="user_password" Placeholder="Password">
          
          <label class = "required" for="Father Name">Father Name:</label>
          <input type="text" id="father_name" name="father_name" placeholder="Father Name">
    
          <label class = "required" for="Mother Name">Mother Name:</label>
          <input type="text" id="mother_name" name="mother_name" placeholder="Mother Name">
    
          <label class = "required" for="pan_number">PAN Number:</label>
          <input type="text" id="pan_number" name="pan_number" placeholder="PAN Number">
          
    
          <label class = "required" for="aadhar_number">Aadhar Number:</label>
          <input type="text" id="aadhar_number" name="aadhar_number" placeholder="Aadhar Number">
        
          <label class = "required" for="state">Martial Status:</label>
        <select id="martial_status" name="martial_status" >
            <option value="Single">Single</option>
            <option value="married">Married</option></select>
            
            
    	 <label class= "required" for="Age"> Age:</label>
		 <input type="number" id="age" name="age" placeholder="Age">        
        </fieldset>
        
        <fieldset>
          <legend><span class="number">2</span>Address Details</legend>
          <label class = "required" for="address">Address:</label>
          <textarea id="Addres" placeholder="Address" name="Address"></textarea>
        </fieldset>
        <fieldset>
    
        <label class = "required" for="door_no">Door No :</label>
        <input type="text" id="door_no" name="door_no" placeholder="Door No">
    
        <label class = "required" for="Street">Street :</label>
        <input type="text" id="street" name="street" placeholder="Street">
    
        <label class = "required" for="District">District :</label>
        <input type="text" id="district" name="district" placeholder="District">
    
        <label class = "required" for="state">Select State:</label>
        <select id="state" name="state" placeholder= "State">
          <optgroup label="Choose Your State" Placeholeder="State">
          	<option  id ="none" value="Select State"></option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chattisgarh">Chattisgarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
            <option value="Jharkand">Jharkand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerla">Kerla</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharastra">Maharastra</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Pudhucherry">Pudhucherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarkhand">Uttarkhand</option>
            <option value="West_Bengal">West Bengal</option>
        </select>
        
          <label for ="res" id ="res "name="Resident">Disability (Optional)</label>
          <input type="checkbox" id="Blind" value="Visibility" name="CheckBox"><label class="light" for="blind">Visibility</label><br>
            <input type="checkbox" id="Hearing" value="Hearing" name="CheckBox"><label class="light" for="NRI">Hearing</label><br>
        <br>
         
        <label class ="required">Passport Size Photo</label>
        <input type="file" id ="pp_photo" name="pp_photo" value ="Upload Photo">
        </fieldset>
        <button class="Button2" id ="Button2"type="submit">Register</button>
        
        <button class="Button2" id="Button2"type="Reset">Reset</button>
      </form>
    

</body>

</html>