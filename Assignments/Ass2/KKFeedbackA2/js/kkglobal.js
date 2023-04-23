
/**
 * File Name: kkglobal.js
 *
 * Revision History:
 *       Khachig Kerbabian, 2022-02-21 : Created
 */


function ratingCheckBoxAdd_Checked() {
    showRatingsDiv();
}


function ratingCheckBoxmodify_Checked() {
    showRatingsDivmodify();
}


function anyChangesInOneOfTheRatingsValusAddpage() {
    overalRatingClaculateAddPage();
}

function anyChangesInOneOfTheRatingsValusModifypage() {
    overalRatingClaculateModifyPage();
}


function btnAdd_click() {
    addFeedback();
}

function btnUpdate_click() {
    updateFeedback();
}

function btnSaveDefaults_click(){
    saveDefaults();
}





function init() {

    //Default of rating section is hidden
    $("#RatingsDiv").hide();
    $("#RatingsDivmodify").hide();


    //adding click handler to the buttons of the form
    $("#btnAdd").on("click", btnAdd_click);
    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnSaveDefaults").on("click", btnSaveDefaults_click);



    //cheching if the user clicked on check box
    $("#ratingCheckBoxAdd").change(ratingCheckBoxAdd_Checked);
    $("#ratingCheckBoxmodify").change(ratingCheckBoxmodify_Checked);


    //live updating as soon as user hit a key on the keyboard
    $("#foodQlyAdd").keyup(anyChangesInOneOfTheRatingsValusAddpage);
    $("#serviceAdd").keyup(anyChangesInOneOfTheRatingsValusAddpage);
    $("#valueAdd").keyup(anyChangesInOneOfTheRatingsValusAddpage);

    $("#foodQlymodify").keyup(anyChangesInOneOfTheRatingsValusModifypage);
    $("#servicemodify").keyup(anyChangesInOneOfTheRatingsValusModifypage);
    $("#valuemodify").keyup(anyChangesInOneOfTheRatingsValusModifypage);

}



$(document).ready(function () {
    init();
});