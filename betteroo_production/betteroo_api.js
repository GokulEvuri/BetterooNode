//**** Abstract Functions ****//

// Before using this dunction use functions to check email and username are unieque.
function register_user(username,email,f_name,l_name,pass_hash,dynamodb){
	var user =	{
				    "TableName":"users",
				    	"Item":{
							"user_name":{"S": username},
							"email":{"S":email},
							"f_name":{"S":f_name},
							"l_name":{"S":l_name},
							"password":{"S":pass_hash}
							
						}
						"Expected":{
							"user_name":{
								"Exists":false
							},
							"email":{
								"Exists":false
							}
						}
				}

	dynamodb.putItem( user, function(err, result) {
		if(err) console.log(err,err.stack);
			else	
			console.log(""+chunk);
	});

};

function username_available(username){
	
};

//**** LOW-LEVEL FUNCTIONS ****//

// to create a new user in database
function create_user(userobject){

};


//**** Data Holders ****//
var dataput = {
     "TableName":"users",
        "Item":{
            "userID":{"S":"3"},
           "name":{"S":"Evuri"},
           "password":{"S":"27cc6994fc1c01ce6659c6bddca9b69c4c6a9418065e612c69d110b3f7b11f8a"},
        "LastName":{"S":"Gokul"}
       }
  };