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
	result.on('data', function(chunk){console.log(""+chunk);});
});
};

function myFunction(req) {
  var params = {
    TableName : 'users',
    KeyConditions : 
      {
        "Item" : 
          {
            "AttributeValueList" : [
              {
                "S" : req
              }
            ],
            "ComparisonOperator" : "EQ"
          }
      }
  }

  dynamodb.query(params, function(err, data) {
    if (err) {
      console.log(err);
      } 
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
      res.send(JSON.stringify(data, undefined, 2));
      console.log(JSON.stringify(data, undefined, 2))
      res.end();
      }
  });
  return next();
 }

myFunction("hello");