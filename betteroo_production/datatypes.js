var user = {
	user_id: "value", 
	user_name: "value", 
	password: "value", 
	e-mail: "value", 
	display_name: "value", 
	created_on: "value", // On which date profile was created
	user_job: "value", 
	user_site: "value", 
	user_facebook: "value", 
	user_twitter: "value", 
	user_google: "value", 
	user_tumblr: "value", 
	user_linkedin: "value", 
	user_blog: "value", 
	user_facebook_id: "value", 
	user_twitter_id: "value", 
	is_prof: "value", // Is a paid user or belongs to paid company
	name_of_company: "value",
	location: "value",
	posts_own:{} // Should contain post_id of posts
	user_ip_history: {}, // Ip adresses of user activity
	last_login:{}, // time stamp of last login
	time_spent: "value", 
	followers:{}, // Should contain user_id
	following:{}  // Should contain user_id
};


var post = {
	post_id: "value", // Unique id for each post
	post_images_refs: {}, // Image reference links on S3
	post_options_count: "value", // Integer, how many options available in post
	post_options_stats:{} // Should contain post_stats datatype objects for each post option 
	post_owner: "value"
};

var post_stats = {
	stats_choosen_users: {}
};

var choosen_users = {
	user_id: "value",
	time_of_response: "value",
	ip_of_user: "value" 
}

¨var user_struct = JSON.stringify(user);
¨var post_struct = JSON.stringify(post);
¨var post_stats_struct = JSON.stringify(post_stats);
¨var choosen_users_struct = JSON.stringify(choosen_users);