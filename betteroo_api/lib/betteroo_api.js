//**** Abstract Functions ****//

// Before using this dunction use functions to check email and username are unieque.
function register_user(username,email,f_name,l_name,pass_hash,dynamodb){
	var user =  {
            "TableName":"users",
              "Item":{
              "user_name":{"S": username},
              "email":{"S":email},
              "f_name":{"S":f_name},
              "l_name":{"S":l_name},
              "password":{"S":pass_hash},
              "created":{"N": new Date().getTime().toString()}
              
            }
        }

  dynamodb.putItem( user, function(err, result) {
    if(err) console.log(err,err.stack);
      else  
      console.log(result);
  });
};

function is_uname_unieque(username){
	
};

//login
function login(username, pass_hash, dynamodb,res){

	var item = {
		"Key": {
			"user_name": {"S":username}
		},
		"TableName": "users",
		"AttributesToGet":[ "password"
		]
	}
	dynamodb.getItem(item,handle_login);


function handle_login(err,data){
		if(err)
			console.log(err,err.stack);
		else
			console.log("ok");
		var login_bool=(data.Item.password.S==pass_hash)?"true":"false";
			console.log("22 "+login_bool);
			res.json(login_bool);
			res.end();		
}

};


function create_poll(question,option1,option2,dynamodb,res){
	var user =  {
            "TableName":"polls",
              "Item":{
              "poll_id":{"N": new poll_id()},
              "question":{"S":question},
              "option1":{"S":option1},
              "option2":{"S":option2},
              "created":{"N": new Date().getTime().toString()}
              
            }
        }

  dynamodb.putItem( user, function(err, result) {
    if(err) console.log(err,err.stack);
      else  
      console.log(result);
  });	
	res.write("poll created");
	res.end();
};


function upload_image(){

}

//**** LOW-LEVEL FUNCTIONS ****//

function poll_id(){
  if(poll_id.count == undefined){
    poll_id.count = 1;
  }
  else{
    poll_id.count ++;
  }
  console.log(poll_id.count);
}


// to create a new user in database
function create_user(userobject){

};


exports.register_user = register_user; //public function
exports.is_uname_unieque = is_uname_unieque; //public function
exports.login = login;