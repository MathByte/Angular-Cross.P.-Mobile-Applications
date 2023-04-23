/**
 * File Name: kkfacade.js
 *
 * Revision History:
 *       Khachig Kerbabian, 2022-02-25 : Created
 */






function RegisterFunc() {
    if (doValidate_frmRegister()) {
        console.log("Register form is valid");
        $("#ShowResult").show();

        var _userName = $("#txtUsername").val();
        var _FullName = $("#txtFullname").val();
        var _Email = $("#txtEmail").val();
        var _password = $("#txtPassword").val();
        var _radioChoice = $('input[name=radio_choice]:checked').val();


        console.log("Username: " + _userName);
        console.log("Full Name: " + _FullName);
        console.log("Email: " + _Email);
        console.log("Password: " + _password);
        console.log("Favorite Platform: " + _radioChoice);

        //save into local storage
        localStorage.setItem("email", _Email);

        // create Jquery object
        var obj = $("#Resaults").text(
            "Username: " + _userName + "\n" +
            "Full Name: " + _FullName + "\n" +
            "Email: " + _Email + "\n" +
            "Password: " + _password + "\n" +
            "Favorite platform: " + _radioChoice
        );

        // replace each \n with <br/>   in obj
        obj.html(obj.html().replace(/\n/g, '<br/>'));

    } else {
        console.log('Register form is INVALID');
        $("#ShowResult").hide();

        $("#Resaults").text();

    }
}






