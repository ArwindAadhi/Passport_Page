function validateForm()
    {
    	
    var a=document.forms["RForm"]["Lname"].value;
    if (a==null || a=="")
      {
      alert("Please Enter Name ");
      return false;
      }
    
    
      var b=document.forms["RForm"]["Pass"].value;
    if (b==null || b=="")
      {
      alert("Please Enter password");
      return false;
      }
    
    
       var c=document.forms["RForm"]["RPass"].value;
    if (c==null || c=="")
      {
      alert("Please Enter Confirm password");
      return false;
      }
      if(b!=c){
        alert("PassWord Doesn't match..");
        return false;
      }

      
      
      var d=document.forms["RForm"]["Email"].value;
    if (d==null || d=="")
      {
      alert("Please Enter Email");
      return false;
      }else
      {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(d.match(mailformat))
        {
        document.RForm.Email.focus();
        //return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.RForm.Email.focus();
        return false;
        }
      }


      var e=document.forms["RForm"]["Gender"].value;
    if (e==null || e=="")
      {
      alert("Please Enter Gender");
      return false;
      }
    
    
      var f=document.forms["RForm"]["Country"].value;
    if (f==null || f=="")
      {
      alert("Please Enter Country");
      return false;
      }
    
    
    var g=document.forms["RForm"]["DOB"].value;
    if (g==null || g=="")
      {
      alert("Please Enter Date Of Birth");
      return false;
      }
    
    
      var h=document.forms["RForm"]["Address"].value;
    if (h==null || h=="")
      {
      alert("Please Enter Address");
      return false;
      }
    
    
      var i=document.forms["RForm"]["Phone"].value;
    if (i==null || i=="")
      {
      alert("Please Enter Phone No");
      return false;

      }

       if(isNaN(i)|| i.indexOf(" ")!=-1) 
        {
               alert("Enter numeric value");
                return false;
                    }
                     if (i.length >10)
                {
                                alert("enter 10 characters"); 
                    return false;
                         }
    
    
    var j=document.forms["RForm"]["VoterId"].value;
    if (j==null || j=="")
      {
      alert("Please Enter Voter ID");
      return false;

      }

       if(isNaN(j)|| j.indexOf(" ")!=-1)
        {
                            alert("Enter numeric value");
                return false;
                    }
                     if (j.length >10)
                {
                                alert("enter 10 characters"); 
                    return false;
                         }
     
     
     
     var k=document.forms["RForm"]["Aadhaar"].value;
     if (k==null || k=="")
       {
       alert("Please Enter Aadhaar Number");
       return false;

       }

        if(isNaN(k)|| k.indexOf(" ")!=-1)
         {
                             alert("Enter numeric value");
                 return false;
                     }
                      if (k.length >12)
                 {
                                 alert("enter 12 characters"); 
                     return false;
                          }
      
    
      
      var l=document.forms["RForm"]["Pan"].value;
      if (l==null || l=="")
        {
        alert("Please Enter Pan Card Number");
        return false;
        }
          if (l.length >10)
                  {
                     alert("enter 10 characters"); 
                      return false;
                           }
          
          
          var m=document.forms["RForm"]["Father"].value;
          if (m==null || m=="")
            {
            alert("Please Enter Father Name");
            return false;
            }
          
          
          var n=document.forms["RForm"]["Mother"].value;
          if (n==null || n=="")
            {
            alert("Please Enter Mother Name");
            return false;
            }
          
          
       }//end of validateForm()
    