//store data with node.js in mongoDB



function Send() {
    var nam = document.getElementById("nameId");
    var ph = document.getElementById("phoneId");
    var mail = document.getElementById("emailId");
    var txt = document.getElementById("textareaId");
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("DemoJS");
        var myobj = { name: nam, phone: ph, email: mail, text: txt };
        dbo.collection("Partner").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Your document is in the database");
        db.close();
        });
    });

    var name = document.getElementById("nameId");
 
    if (name.value != "") {
        alert('Thank you Mr/Ms) ' + name.value + ' you sent your data with sucess!');
    }
 
}