
/**
 * File Name: kkglobal.js
 *
 * Revision History:
 *       Khachig Kerbabian,  2022-03-28 : Created
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


function btnDelete_click() {
    deletAFreedbackRecord();
}



function btnSaveDefaults_click(){
    saveDefaults();
}






function AutoGeneratTypes(){
    GeneratTypesInFacad();
}

function clearDatabaseBut_clicked(){
    CleardataBase();
}


function PageFeedBack_add(){
    updateTypesDropdown_add();
    // updateTypesDropdown_modify();
    update_All_Fields_Of_Add_Page();

}

function View_FeedbackPage(){

    getReviews()

}

function Modify_FeedbackPage(){
    updateTypesDropdown_modify();
    getOneReview();
}






function init() {

    //Default of rating section is hidden
    $("#RatingsDiv").hide();
    $("#RatingsDivmodify").hide();


    //adding click handler to the buttons of the form
    $("#btnAdd").on("click", btnAdd_click);
    $("#btnUpdate").on("click", btnUpdate_click);
    $("#btnSaveDefaults").on("click", btnSaveDefaults_click);
    $("#btnDelete").on("click", btnDelete_click);


    //cheching if the user clicked on check box
    $("#ratingCheckBoxAdd").change(ratingCheckBoxAdd_Checked);
    $("#ratingCheckBoxModify").change(ratingCheckBoxmodify_Checked);


    //clear database
    $("#btnClearDatabase").on("click", clearDatabaseBut_clicked );



    //live updating as soon as user hit a key on the keyboard
    $("#foodQlyAdd").keyup(anyChangesInOneOfTheRatingsValusAddpage);
    $("#serviceAdd").keyup(anyChangesInOneOfTheRatingsValusAddpage);
    $("#valueAdd").keyup(anyChangesInOneOfTheRatingsValusAddpage);

    $("#foodQlyModify").keyup(anyChangesInOneOfTheRatingsValusModifypage);
    $("#serviceModify").keyup(anyChangesInOneOfTheRatingsValusModifypage);
    $("#valueModify").keyup(anyChangesInOneOfTheRatingsValusModifypage);




    $('#kkAddFeedbackPage').on("pageshow", PageFeedBack_add);
    $('#kkViewFeedbackPage').on('pageshow', View_FeedbackPage);
    $('#kkModifyFeedbackPage').on('pageshow', Modify_FeedbackPage);

}




function initDB(){
    try{
        DB.createDatabase();
        if (db) {
            console.info("Creating tables..");
            DB.createTables();

            //generating elements of type table
            AutoGeneratTypes();


        }
        else{
            console.error("Error: Cannot create tables: Dababase does not exists");
        }
    }catch(e){
        console.error("Error: (Fatal)  Error in initDB(). can not proceed" );
    }
}


$(document).ready(function () {
    initDB();
    init();
});


