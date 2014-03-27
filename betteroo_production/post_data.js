// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'AKIAJ3ZCZ53KG6X4EYWA', 
  secretAccessKey: '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',
  region: 'eu-west-1'
});


var params = {
	TableName: 'users'
};

var dynamodb = new AWS.DynamoDB();
dynamodb.describeTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var dataput = {
     "TableName":"users",
        "Item":{
          "user_name":{"S":"3"},
            "userID":{"S":"3"},
           "name":{"S":"Evuri"},
           "password":{"S":"27cc6994fc1c01ce6659c6bddca9b69c4c6a9418065e612c69d110b3f7b11f8a"},
        "LastName":{"S":"Gokul"}
       }
  };

function test(){
  dynamodb.putItem( dataput, function(err, result) {
	if(err) console.log(err,err.stack);
	else	
	console.log(result);
});
};

function myFunction(req) {
  var params = {
    TableName : 'users',
    KeyConditions : 
      {
        
          "AttributeValueList" : [
            {
              "S" : req
            }
            ],
            "ComparisonOperator" : "EQ"
          }
      }

  dynamodb.query(params, function(err, data) {
    if (err) {
      console.log(err);
      } 
    else {
      console.log(JSON.stringify(data, undefined, 2))
      }
  });
 }

//myFunction("hello");

function test_register_user(username,email,f_name,l_name,pass_hash){
  var user =  {
            "TableName":"users",
              "Item":{
              "user_name":{"S": username},
              "email":{"S":email},
              "f_name":{"S":f_name},
              "l_name":{"S":l_name},
              "password":{"S":pass_hash},
              "created":{"N": new Date().getTime().toString()}
              
            },
            "Expected":{
              "user_name":{
                "Exists":false,
                "Value":{
                  "S":username
                }
              },
              "email":{
                "Exists":false,
                "Value":{
                  "S":email
                }
              }
            }
        }

  dynamodb.putItem( user, function(err, result) {
    if(err) console.log(err,err.stack);
      else  
      console.log(result);
  });

};

test_register_user("Gokul","gokul.evuri@gmail.com","Gokul","Evuri","27cc6994fc1c01ce6659c6bddca9b69c4c6a9418065e612c69d110b3f7b11f8a");
//test();