


    var nam = document.getElementById("nameId");
    var ph = document.getElementById("phoneId");
    var mail = document.getElementById("emailId");
    var txt = document.getElementById("textareaId");
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/DemoJS";



    MongoClient.connect(url, function(err ,db){
        if(err) throw err;
        var dbo = db.db("DemoJS");
        var myObj = { name: "nam", phone: "ph", email: "mail", text: "txt"}; // Object to be insertOne
        dbo.collection("partner").insertOne(myObj, function(err, res){ // inset the object in the 'partner' collection
            if(err) throw err;
            console.log("Your document is in the database!");
            db.close;
        });
    });


