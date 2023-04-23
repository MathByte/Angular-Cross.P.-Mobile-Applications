/**
 * File Name: kkutil.js
 *
 * Revision History:
 *       Khachig Kerbabian,  2022-03-28 : Created
 */





// https://jqueryvalidation.org/documentation/
function doValidate_frmAddFeedback(){

    var form = $("#frmAddFeedbackPage");
    form.validate({
        rules:{
            txtBNameAdd:{
                required: true,
                rangelength:[2, 20]
            },
            txtEmailAdd:{
                required: true,
                emailcheck: true
            },
            txtReviewDateAdd:{
                required: true
            },
            foodQlyAdd:{
                required: true,
                number: true,
                range:[0, 5]
            },
            serviceAdd:{
                required: true,
                number: true,
                range:[0, 5]
            },
            valueAdd:{
                required: true,
                number: true,
                range:[0, 5]
            }
        },


        messages:{
            txtBNameAdd:{
                required: "You must enter your Business name",
                minlength: "Your name must be at least 2 char long"
            },
            txtEmailAdd:{
                required: "You must enter an valid Email",
                emailcheck: "Please Enter a valid email"
            },
            txtReviewDateAdd:{
                required: "Review Date is required"
            },
            foodQlyAdd:{
                required: "Value must be in between [0 - 5]"
            },
            serviceAdd:{
                required: "Value must be in between [0 - 5]"
            },
            valueAdd:{
                required: "Value must be in between [0 - 5]"
            }
        }
    });
    return form.valid();
}

















// https://jqueryvalidation.org/documentation/
function doValidate_frmModifyFeedback(){
    var form = $("#frmModifyFeedbackPage");
    form.validate({
        rules:{
            txtBNameModify:{
                required: true,
                rangelength:[2, 20]
            },
            txtEmailModify:{
                required: true,
                emailcheck: true
            },
            txtReviewDateModify:{
                required: true
            },
            foodQlyModify:{
                required: true,
                number: true,
                range:[0, 5]
            },
            serviceModify:{
                required: true,
                number: true,
                range:[0, 5]
            },
            valueModify:{
                required: true,
                number: true,
                range:[0, 5]
            }
        },


        messages:{
            txtBNameModify:{
                required: "You must enter your Business name",
                minlength: "Your name must be at least 2 char long"
            },
            txtEmailModify:{
                required: "You must enter an valid Email",
                emailcheck: "Please Enter a valid email"
            },
            txtReviewDateModify:{
                required: "Review Date is required"
            },
            foodQlyModify:{
                required: "Value must be in between [0 - 5]"
            },
            serviceModify:{
                required: "Value must be in between [0 - 5]"
            },
            valueModify:{
                required: "Value must be in between [0 - 5]"
            }
        }
    });
    return form.valid();
}








jQuery.validator.addMethod("emailcheck",
    function(value, element){
        var regex = /^\S+@\S+\.\S+$/;
        return this.optional(element) || regex.test(value);
    },
    "Must be a valid email address");






























