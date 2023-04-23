/**
 * File Name: kkfacade.js
 *
 * Revision History:
 *       Khachig Kerbabian, 2022-02-21 : Created
 */


function showRatingsDiv() {

    if ($("#ratingCheckBoxAdd").is(':checked')) {
        $("#foodQlyAdd").val(0);
        $("#serviceAdd").val(0);
        $("#valueAdd").val(0);
        $("#overalratingCalculated").attr('readOnly', true);
        $("#overalratingCalculated").val(0 + '%');
        $("#RatingsDiv").show();
    } else {
        $("#RatingsDiv").hide();
    }
}


function showRatingsDivmodify() {

    if ($("#ratingCheckBoxmodify").is(':checked')) {

        $("#foodQlymodify").val(0);
        $("#servicemodify").val(0);
        $("#valuemodify").val(0);
        $("#overalratingCalculatedmodify").attr('readOnly', true);
        $("#overalratingCalculatedmodify").val(0 + '%');
        $("#RatingsDivmodify").show();
    } else {
        $("#RatingsDivmodify").hide();
    }
}


function saveDefaults(){
    var defaultReviewerEmail = $("#txtdefaultReviwerEmail").val();
    localStorage.setItem("DefaultEmail", defaultReviewerEmail);
    alert("Default Reviewer Email Saved!");
}

function addFeedback() {
    if (doValidate_frmAddFeedback()) {
        console.log("Add form is valid");
    } else {
        console.log('Add form is INVALID');
    }
}

function updateFeedback() {
    if (doValidate_frmModifyFeedback()) {
        console.log("Modify form is valid");
    } else {
        console.log('Modify form is INVALID');
    }
}








function overalRatingClaculateAddPage() {
    var food = parseInt($("#foodQlyAdd").val());
    var service = parseInt($("#serviceAdd").val());
    var value = parseInt($("#valueAdd").val());
    var anser = Math.round(( food + service + value) * 100 / 15);
    $("#overalratingCalculated").val(anser + '%');


}


function overalRatingClaculateModifyPage() {
    var food = parseInt($("#foodQlymodify").val());
    var service = parseInt($("#servicemodify").val());
    var value = parseInt($("#valuemodify").val());
    var anser = Math.round(( food + service + value) * 100 / 15);
    $("#overalratingCalculatedmodify").val(anser + '%');

}
