/**
 * File Name: kkdatabse.js
 *
 * Revision History:
 *       Khachig Kerbabian,  2022-03-28 : Created
 */



var db;

function errorHandler(error) {
    console.error("SQL error: " + error.message);
}

var DB = {
    createDatabase: function () {
        var shortName = "KKFeedbackDB";
        var version = "1.0";
        var displayName = "DB for KKFeedbackDB app";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating database ...");

        function dbCreateSuccess() {
            console.info("Succes: Database created successfully");
        }
        db = openDatabase(shortName, version, displayName,dbSize, dbCreateSuccess);
    },
    createTables: function () {
        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS review(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "businessName VARCHAR(30) NOT NULL," +
                "typeId INTEGER NOT NULL," +
                "reviewerEmail VARCHAR(30)," +
                "reviewerComments TEXT," +
                "reviewDate DATE," +
                "hasRating VARCHAR(1)," +
                "rating1 INTEGER," +
                "rating2 INTEGER," +
                "rating3 INTEGER," +
                "FOREIGN KEY(typeId) REFERENCES type(id));";
            var options = [];


            function successCallback() {
                console.info("Success: Review table created successfully");
            }

            tx.executeSql(sql, options, successCallback, errorHandler  );







            var sql = "CREATE TABLE IF NOT EXISTS type( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL)";

            var options = [];


            function successCallback() {
                console.info("Success: Type table created successfully");
            }

            tx.executeSql(sql, options, successCallback, errorHandler  );



        }
        function successTransaction() {
            console.info("Success: Create tables transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    },
    createTypeTable: function () {
        function txFunction(tx) {
            var sql = "CREATE TABLE IF NOT EXISTS type( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL)";

            var options = [];


            function successCallback() {
                console.info("Success: Type table created successfully");
            }

            tx.executeSql(sql, options, successCallback, errorHandler  );



        }
        function successTransaction() {
            console.info("Success: Create type table transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    },
    dropTables: function () {
        function txFunction(tx) {
            var sql = "DROP TABLE IF EXISTS review;";
            var options = [];

            function successCallback() {
                console.info("Success: Review table dropped successfully");
            }

            tx.executeSql(sql, options, successCallback, errorHandler  );





            var sql = "DROP TABLE IF EXISTS type;";
            var options = [];

            function successCallback() {
                console.info("Success: Type table dropped successfully");
            }

            tx.executeSql(sql, options, successCallback, errorHandler  );


        }
        function successTransaction() {
            console.info("Success: drop table transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    },
    dropTypeTable: function () {
        function txFunction(tx) {

            var sql = "DROP TABLE IF EXISTS type;";
            var options = [];

            function successCallback() {
                console.info("Success: Type table dropped successfully");
            }

            tx.executeSql(sql, options, successCallback, errorHandler  );
        }
        function successTransaction() {
            console.info("Success: drop table transaction is successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    }

};





