/**
 * File Name: kkfacade.js
 *
 * Revision History:
 *       Khachig Kerbabian, 2022-03-28 : Created
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
        $("#foodQlyAdd").val(0);
        $("#serviceAdd").val(0);
        $("#valueAdd").val(0);
        $("#overalratingCalculated").attr('readOnly', true);
        $("#overalratingCalculated").val(0 + '%');
        $("#RatingsDiv").hide();
    }
}


function showRatingsDivmodify() {


    if ($("#ratingCheckBoxModify").is(':checked')) {

        $("#foodQlyModify").val(0);
        $("#serviceModify").val(0);
        $("#valueModify").val(0);
        $("#overalratingCalculatedModify").attr('readOnly', true);
        $("#overalratingCalculatedModify").val(0 + '%');
        $("#RatingsDivmodify").show();
    } else {
        $("#foodQlyModify").val(0);
        $("#serviceModify").val(0);
        $("#valueModify").val(0);
        $("#overalratingCalculatedModify").attr('readOnly', true);
        $("#overalratingCalculatedModify").val(0 + '%');
        $("#RatingsDivmodify").hide();
    }
}


function saveDefaults() {
    var defaultReviewerEmail = $("#txtdefaultReviwerEmail").val();
    localStorage.setItem("DefaultEmail", defaultReviewerEmail);
    alert("Default Reviewer Email Saved!");
}

function addFeedback() {
    if (doValidate_frmAddFeedback()) {
        console.log("Add form is valid");

        var BusinesName = $("#txtBNameAdd").val();
        var Type = $("#txtTypeAdd").val();
        var Email = $("#txtEmailAdd").val();
        var RevComment = $("#txtCommentAdd").val();
        var RevDate = $("#txtReviewDateAdd").val();
        var Checked = $("#ratingCheckBoxAdd").prop('checked');
        var Food = $("#foodQlyAdd").val();
        var service = $("#serviceAdd").val();
        var val = $("#valueAdd").val();

        var options = [BusinesName, Type, Email, RevComment, RevDate, Checked, Food, service, val];
        console.log(options);

        function callback() {
            console.info("Success: record inserted successfully");
            alert("New Feedback Added.")
        }

        Review.insert(options, callback);


    } else {
        console.log('Add form is INVALID');
    }
}


function updateFeedback() {

    if (doValidate_frmModifyFeedback()) {
        console.log("Modify form is valid");
        var id = localStorage.getItem('id');
        var BusName = $("#txtBNameModify").val();
        var Type = $("#txtTypeModify").val();
        var Email = $("#txtEmailModify").val();
        var RevComment = $("#txtCommentsModify").val();
        var RevDate = $("#txtReviewDateModify").val();
        var Checked = $("#ratingCheckBoxModify").prop('checked');
        var Food = $("#foodQlyModify").val();
        var service = $("#serviceModify").val();
        var val = $("#valueModify").val();

        var options = [BusName, Type, Email, RevComment, RevDate, Checked, Food, service, val, id];
        console.log(options);

        function callback() {
            console.info("Record updated successfully");
            alert("Feedback Updated Successfully.")
        }

        Review.update(options, callback);


    } else {
        console.log('Modify form is INVALID');
    }
}

function deletAFreedbackRecord() {

    var id = localStorage.getItem('id');
    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");
        alert("Feedback Deleted Successfully!");
        window.history.back();
    }

    Review.delete(options, callback);
}


function overalRatingClaculateAddPage() {
    var food = parseInt($("#foodQlyAdd").val());
    var service = parseInt($("#serviceAdd").val());
    var value = parseInt($("#valueAdd").val());
    var anser = Math.round((food + service + value) * 100 / 15);
    $("#overalratingCalculated").val(anser + '%');


}


function overalRatingClaculateModifyPage() {
    var food = parseInt($("#foodQlyModify").val());
    var service = parseInt($("#serviceModify").val());
    var value = parseInt($("#valueModify").val());
    var anser = Math.round((food + service + value) * 100 / 15);
    $("#overalratingCalculatedModify").val(anser + '%');

}


function GeneratTypesInFacad() {

    console.log("Dropping type table...");
    DB.dropTypeTable();
    console.log("Creating type table...");
    DB.createTypeTable();
    var values = ["Others", "Canadian", "Asian", "European", "Australian"];
    var options = [];


    function callback() {
        console.info("Success: Type table record inserted successfully");
    }

    for (let i = 0; i < 5; i++) {
        options = [""];
        options[0] = values[i];

        Types.insert(options, callback);

    }


}




function CleardataBase() {
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.dropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}


function getOneReview() {
    // var id = $("#txtId").val();
    var id = localStorage.getItem('id');
    var options = [id];

    function callback(tx, results) {
        console.info("Success: Record selected successfully");
        var row = results.rows[0];

        console.log(row);
        $("#txtBNameModify").val(row['businessName']);


        $("#txtTypeModify").prop('selectedIndex', row['typeId'] - 1);
        $("#txtTypeModify").selectmenu("refresh");


        $("#txtEmailModify").val(row['reviewerEmail']);
        $("#txtCommentsModify").val(row['reviewerComments']);
        $("#txtReviewDateModify").val(row['reviewDate']);


        if (row['hasRating'] === 'true') {
            //invking a click on checlbox plus change class type fron checked-on to checked-off
            if ($("#ratingCheckBoxModify").is(':checked')) {
                $("#RatingsDivmodify").show();
            } else {
                $("#ratingCheckBoxModify").trigger('click');
                $("#ratingCheckBoxModify").removeClass('ui-checkbox-off');
                $("#ratingCheckBoxModify").addClass('ui-checkbox-on');
                $("#RatingsDivmodify").show();
            }


            $("#foodQlyModify").val(row['rating1']);
            $("#serviceModify").val(row['rating2']);
            $("#valueModify").val(row['rating3']);
            var anser = Math.round((row['rating1'] + row['rating2'] + row['rating3']) * 100 / 15);
            $("#overalratingCalculatedModify").val(anser);
        } else {
            //invking a click on checlbox plus change class type fron checked-on to checked-off
            if ($("#ratingCheckBoxModify").is(':checked')) {
                $("#ratingCheckBoxModify").trigger('click');
                $("#ratingCheckBoxModify").removeClass('ui-checkbox-on');
                $("#ratingCheckBoxModify").addClass('ui-checkbox-off');
                $("#RatingsDivmodify").hide();
            } else {
                $("#RatingsDivmodify").hide();
            }
            $("#foodQlyModify").val(0);
            $("#serviceModify").val(0);
            $("#valueModify").val(0);
        }

    }

    Review.select(options, callback);
}


function getReviews() {
    // var id = $("#txtId").val();
    var options = [];
    var htmlCode = "";

    function callback(tx, results) {
        console.info("Success: Records selected successfully");
        if (results.rows.length > 0) {
            for (var i = 0; i < results.rows.length; i++) {
                var row = results.rows[i];



                if (row['hasRating'] == false) {
                    htmlCode += `<li><a data-role="button" data-row-id=${row['id']} href="#">
                                    <h1>Business Name: ${row['businessName']}</h1>
                                    <h2>Reviewer Email: ${row['reviewerEmails']}</h2>
                                    <h3>Comments: ${row['reviewerComments']}</h3>
                                    <h3>Overall Rating: 0%</h3>
                                    </a></li>`;
                }
                else
                {
                    var anser = Math.round((row['rating1'] + row['rating2'] + row['rating3']) * 100 / 15);
                    htmlCode += `<li><a data-role="button" data-row-id=${row['id']} href="#">
                                    <h1>Business Name: ${row['businessName']}</h1>
                                    <h2>Reviewer Email: ${row['reviewerEmail']}</h2>
                                    <h3>Comments: ${row['reviewerComments']}</h3>
                                    <h3>Overall Rating: ${anser}%</h3>
                                    </a></li>`;
                }
            }
        } else {
            htmlCode += `<h1> No record found</h1>`;
        }
        var lv = $("#lvAll");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', '#kkModifyFeedbackPage');
        }

        $("#lvAll a").on("click", clickHandler);
    }

    Review.selectAll(options, callback);
}


function update_All_Fields_Of_Add_Page() {

    $("#txtBNameAdd").val('');
    $("#txtCommentAdd").val('');
    $("#foodQlyAdd").val('');
    $("#serviceAdd").val('');
    $("#valueAdd").val('');
    $("#overalratingCalculated").val('');
    var now = new Date();


    //$("#txtReviewDateAdd").val(now.getFullYear()+ '-' + ("0" + (now.getMonth() + 1)).slice(-2) + '-' + now.getDate() );


    $("#txtReviewDateAdd").val( '');

    //invking a click on checlbox plus change class type fron checked-on to checked-off
    if ($("#ratingCheckBoxAdd").is(':checked')) {
        $("#ratingCheckBoxAdd").trigger('click');
        $("#ratingCheckBoxAdd").removeClass('ui-checkbox-on');
        $("#ratingCheckBoxAdd").addClass('ui-checkbox-off');
    }

    $("#txtEmailAdd").val(localStorage.getItem('DefaultEmail'));

}


function updateTypesDropdown_add() {
    // var id = $("#txtId").val();
    var options = [];
    var htmlCode = "";

    function callback(tx, results) {
        console.info("Success: Records selected successfully");

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += `<option value="${row['id']}">${row['name']}</option>`;
        }
        var sel = $("#txtTypeAdd");
        sel = sel.html(htmlCode);


        $("#txtTypeAdd").prop('selectedIndex', 0);
        $("#txtTypeAdd").selectmenu("refresh");
    }

    Types.selectAll(options, callback);
}

function updateTypesDropdown_modify() {
    // var id = $("#txtId").val();
    var options = [];
    var htmlCode = "";

    function callback(tx, results) {
        console.info("Success: Records selected successfully");

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            htmlCode += `<option value="${row['id']}">${row['name']}</option>`;
        }
        var sel = $("#txtTypeModify");
        sel = sel.html(htmlCode);
    }

    Types.selectAll(options, callback);
}
