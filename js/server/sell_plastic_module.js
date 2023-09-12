var db = openDatabase("Ecocycle", "1.0", "Ecocycle", 65535);

const TABLE_NAME = "PLASTIC_SELLERS";

db.transaction(function(transaction){
	var sql="CREATE TABLE " + TABLE_NAME +
	" (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
	"username VARCHAR(50) NOT NULL, " +
	"address VARCHAR(100) NOT NULL, " +
    "wasteWeight INT(2) NOT NULL)";
	transaction.executeSql(sql,undefined,function(){
		console.log(TABLE_NAME + " is created successfully");
	},function(){
		console.log(TABLE_NAME + " is already being created");
	})
});

export function addPlasticSeller(address, weight) {
    const username = localStorage.getItem('currentUsername');

    db.transaction(function(transaction) {
        var sql="INSERT INTO " + TABLE_NAME + " (username,address,wasteWeight) VALUES(?,?,?)";
        transaction.executeSql(sql,[username,address,weight], function(){
            console.log("New seller is added successfully");
        }, function(transaction,err){
            console.error(err.message);
        })
    });
};
