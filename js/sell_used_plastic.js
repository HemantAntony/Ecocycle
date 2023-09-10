

var db = openDatabase("Ecocycle", "1.0", "Ecocycle", 65535);

const TABLE_NAME = "PLASTIC_SELLERS";

db.transaction(function(transaction){
	var sql="CREATE TABLE " + TABLE_NAME +
	" (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
	"name VARCHAR(30) NOT NULL, " +
	"address VARCHAR(100) NOT NULL, " +
    "phoneNumber VARCHAR(15) NOT NULL, " +
    "wasteWeight INT(2) NOT NULL)";
	transaction.executeSql(sql,undefined,function(){
		console.log("Table is created successfully");
	},function(){
		console.log("Table is already being created");
	})
});

// db.transaction(function(transaction) {
//     var sql="DROP TABLE " + TABLE_NAME;
//     transaction.executeSql(sql,undefined,function(){
//         console.log("Table deleted successfully");
//     },function(){
//         console.log("Table could not be deleted");
//     })
// });

document.getElementById("submitForm").onclick = function() {
    function getVal(id) {
        return document.getElementById(id).value;
    }
    
    const name = getVal("sellerName");
    const address = getVal("sellerAddress");
    const phoneNumber = getVal("sellerPhoneNumber");
    const weight = getVal("sellerWasteWeight");

    db.transaction(function(transaction) {
        var sql="INSERT INTO " + TABLE_NAME + " (name,address,phoneNumber,wasteWeight) VALUES(?,?,?,?)";
        transaction.executeSql(sql,[name,address,phoneNumber,weight],function(){
            console.log("New item is added successfully");
        },function(transaction,err){
            console.error(err.message);
        })
    });
};

// db.transaction(function(transaction) {
//     var sql = "SELECT * FROM " + TABLE_NAME;
//     transaction.executeSql(sql, undefined, function(transaction, result) {
//         console.log(result.rows);
//     }, function() {
//         alert("ERROR");
//     })
// });
