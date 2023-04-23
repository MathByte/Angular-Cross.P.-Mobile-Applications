/**
 * File Name: kkutil.js
 *
 * Revision History:
 *       Khachig Kerbabian, 2022-02-25 : Created
 */





// https://jqueryvalidation.org/documentation/
function doValidate_frmRegister(){

    var form = $("#frmRegister");
    form.validate({
        rules:{
            txtUsername:{
                required: true,
                minlength: 3
            },
            txtFullname:{
                required: true,
                rangelength:[5, 20]
            },
            txtEmail:{
                required: true,
                emailcheck: true
            },
            txtPassword:{
                required: true,
                minlength: 6,
                passwordcheck: true
            },
            txtVerifyPassword:{
                required: true,
                equalTo: "#txtPassword"
            }
        },


        messages:{
            txtUsername:{
                required: "You must enter Username",
                minlength: "Username must be at least 3 characters long"
            },
            txtFullname:{
                required: "You must enter Full Name",
                rangelength: "Full name must be 5-20 characters long"
            },
            txtEmail:{
                required: "You must enter Email address",
                emailcheck:"You must enter a gmail email"
            },
            txtPassword:{
                required: "You must enter Password",
                minlength: "Password must be at least 6 characters long",
                passwordcheck: "Password must contain at least 1 digit and 1 Capital letter"
            },
            txtVerifyPassword:{
                required: "You must re-enter Password",
                equalTo: "Password must match"
            }
        }
    });
    return form.valid();
}





jQuery.validator.addMethod("passwordcheck",
    function(value, element){
        var regexp = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || regexp.test(value);
    },
    "Password must contain at least 1 digit and 1 capital letter");

jQuery.validator.addMethod("emailcheck",
    function(value, element){
        var regex = /^.+@gmail.com$/;
        return this.optional(element) || regex.test(value);
    },
    "You must enter a gmail email");
