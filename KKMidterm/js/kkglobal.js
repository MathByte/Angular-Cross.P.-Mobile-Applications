
/**
 * File Name: kkglobal.js
 *
 * Revision History:
 *       Khachig Kerbabian, 2022-02-25 : Created
 */





function  btnRegister_click() {
    RegisterFunc();
}







function init() {

    //Default of Registered info section is hidden
    $("#ShowResult").hide();

    //adding click handler to the buttons of the form
    $("#btnRegister").on("click", btnRegister_click);

}



$(document).ready(function () {
    init();
});