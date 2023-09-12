var db = openDatabase("Ecocycle", "1.0", "Ecocycle", 65535);

const TABLE_NAME = "USERS";

var userChangedCallbacks = [];

function notifyUserChangedCallbacks() {
    userChangedCallbacks.forEach(callback => {
        callback();
    });
}

db.transaction(function(transaction){
	var sql="CREATE TABLE " + TABLE_NAME +
	" (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
	"username VARCHAR(50) NOT NULL," +
	"password VARCHAR(50) NOT NULL," +
	"email VARCHAR(50) NOT NULL," +
	"phoneNumber VARCHAR(15) NOT NULL," +
	"address VARCHAR(110) NOT NULL)";
	transaction.executeSql(sql, undefined, function() {
		console.log(TABLE_NAME + " is created successfully");
	}, function(transaction, err) {
		console.log(TABLE_NAME + " is already created");
	})
});

export function signUpUser(username, password, email, phoneNumber, address) {
    db.transaction(function(transaction) {
        var sql="INSERT INTO " + TABLE_NAME + " (username,password, email, phoneNumber, address) VALUES(?,?,?,?,?)";
        transaction.executeSql(sql,[username, password, email, phoneNumber, address], function(){
            localStorage.setItem('currentUsername', username);
            notifyUserChangedCallbacks();
            console.log("New user has been added successfully");
        }, function(transaction,err){
            console.error(err.message);
        })
    });
}

export function loginUser(username, password) {
    db.transaction(function(transaction) {
        var sql = "SELECT password FROM " + TABLE_NAME + " WHERE username = \"" + username + "\";";
        transaction.executeSql(sql, undefined, function(transaction, result) {
            if (result.rows.length != 1) {
                console.error("Unacceptable number of passwords for same user");
                return false;
            }

            if (result.rows[0].password === password) {
                localStorage.setItem('currentUsername', username);
                notifyUserChangedCallbacks();
                return true;
            }

            return false;
        }, function(transaction, err) {
            console.error(err.message);
        })
    });
}

export function logoutUser() {
    localStorage.setItem('currentUsername', "");
    notifyUserChangedCallbacks();
}

export function onUserChanged(callback) {
    userChangedCallbacks.push(callback);
}

export function getCurrentUserAddress(callback) {
    db.transaction(function(transaction) {
        var sql = "SELECT address FROM " + TABLE_NAME + " WHERE username = \""
        + localStorage.getItem('currentUsername') + "\";";
        transaction.executeSql(sql, undefined, function(transaction, result) {
            if (result.rows.length >= 1) {
                callback(result.rows[0].address);
            }
        }, function(transaction, err) {
            console.error(err.message);
        })
    });
}
