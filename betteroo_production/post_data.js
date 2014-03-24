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