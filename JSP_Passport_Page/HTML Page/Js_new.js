// $(function () {}
//    $.validator.setDefaults({
//        errorClass: 'help-block',
//        highlight: function (element) {
//            $(element)
//                .closest('.form-group')
//                .addClass('has-error');
//        },
//        unhighlight: function (element) {
//            $(element)
//                .closest('.form-group')
//                .removeClass('has-error');
//        },
//        errorPlacement: function (error, element) {
//            if (element.prop('type') === 'checkbox') {
//                error.insertAfter(element.parent());
//            } else {
//                error.insertAfter(element);
//            }
//        }
//    });
//    //age calculator

//    $(document).ready(function () {
//        $("#dob").change(function () {
//            var start_date = new Date($("#dob").val());
//            var date = new Date();
//            var end_date = new Date(start_date);
//           end_date.setFullYear(date.getFullYear()-start_date.getFullYear());
//            $("#age").val(end_date.getFullYear());
//        });
//    })

//    $.validator.addMethod('strongPassword', function (value, element) {
//        return this.optional(element)
//            || value.length >= 8
//            && /\d/.test(value)
//            && /[a-z]/i.test(value);
//    }, 'Your password must be at least 8 characters long and contain at least one number and one character\'.')

//    $.validator.addMethod('select', function(value, element){
//            if(value === 'select'){ 
//            return false;   
//            }
//            else
//            return true;
//    }, 'Select an option')

//    $(:input).

//    $.validatoraddMethod('aadhar', function(value, element){
//        return this.optional(element)
//        || value.length == 16;
//    },)
//    $("#appForm").validate({
//        errorClass: 'errors',
       
//        rules: {

//            applicationFor:{
//                select:true
//            },

//            applicationType:{
//                select:true
//            },

//            firstname: {
//                required: true,
//                nowhitespace: true,
//                lettersonly: true
//            },
//            lastname: {
//                required: true,
//                nowhitespace: true,
//                lettersonly: true
//            },

//            dob:{
//                required: true
//            },

//            email: {
//                required: true,
//                email: true,
//            },

//            mobile: {
//                required: true,
//                digits: true,
//                minlength:10,
//                maxlength:10
//            },

//            password: {
//                required: true,
//                strongPassword: true
//            },

//            cnf_password: {
//                required: true,
//                equalTo: '#password'
//              },

//            address: {
//                required: true
//            },

//            address2: {
//                required: true
//            },

//            city: {
//                required: true,
//                lettersonly: true
//            },

//            state: {
//                required: true,
//                select:true
//            },

//            zip: {
//                required: true,
//                digits: true
//            },

//            townBirth: {
//                required: true,
//                lettersonly: true
//            },

//            maritialStatus: {
//                required: true,
//                select: true
//            },


//            aadhar: {
//                required: true
//            },

//            terms: {
//                required: true
//            }
//        },
//        messages: {
//            firstname: {
//                required: 'Enter your First Name',
//                nowhitespace: 'no space allowed',
//                lettersonly: 'Alphabets only',
               
//            },
//            lastname: {
//                required: 'Enter your Last Name',
//                nowhitespace: 'no space allowed',
//                lettersonly: 'Alphabets only'
//            },


//            password: {
//                required: 'Enter a password'

//            },
//            cnf_password:{
//                equalTo: 'Passwords do not match'
//            },

//            address: {
//                required: 'Enter your Addresss'
//            },

//            address2: {
//                required: 'Enter alternate Address'
//            },

//            city: {
//                required: 'Enter your city',
//                lettersonly: 'Alphabets only'
//            },

//            state: {
//                required: 'select your state'
//            },

//            zip: {
//                required: 'Enter your zip/pin code',
//            },
           
//            mobile:{
//                required:'Enter your mobile number'

//            },
//            townBirth: {
//                required: 'Enter your Birth town/village',
//                lettersonly: 'Alphabets only'
//            },

//            maritialStatus: {
//                required: 'Select Maritial status'
//            },


//            aadhar: {
//                required: 'Enter your Aadhar number'
//            },

//            terms: {
//                required: 'check this box'

//            },

//            email: {
//                required: 'Please enter an email address.',
//                email: 'Please enter a <em>valid</em> email address.',
//            }

//        }
//    });

// });

function validateForm() {
    var x = document.getElementById("txtEmail").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {


        document.getElementById("lblError").innerHTML = "Enter valid email Address";
    }
    else {
        document.getElementById("lblError").innerHTML = "";
    }

    var a = document.getElementById('name').value;
    if(a == ""){
        document.getElementById("lblError_name").innerHTML = "Please Enter the name";
    }
    else if(a.length < 3){
        document.getElementById("lblError_name").innerHTML = "Please enter a valid name";
    }
    else{
        document.getElementById("lblError_name").innerHTML =""
    }
}
