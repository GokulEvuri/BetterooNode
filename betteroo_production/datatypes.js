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
	followers:{}, // Should contain user_id
	following:{}  // Should contain user_id
};

var dynamic_user = {
	posts_own:{} // Should contain post_id of posts
	user_ip_history: {}, // Ip adresses of user activity
	last_login:{}, // time stamp of last login
};



var post = {
	post_created_on: "value", // Date created on
	post_heading: "value",  
	post_id: "value", // Unique id for each post
	post_options:{},
	post_images_refs: {}, // Image reference links on S3
	post_options_count: "value", // Integer, how many options available in post
	post_options_stats:{} // Should contain post_stats datatype objects for each post option 
	post_owner: "value"
};

var post_stats = {
	user_id: "value", // user of choosen option [this option]:::: USE CASE, if user_id: 123 chooses this option, here it will be 123
	time_of_response: "value", // time stamp when option choosen
	ip_of_user: "value"
}

¨var user_struct = JSON.stringify(user);
¨var post_struct = JSON.stringify(post);
¨var post_stats_struct = JSON.stringify(post_stats);
¨var choosen_users_struct = JSON.stringify(choosen_users);

module.exports.user_struct = user_struct;
module.exports.post_struct = post_struct;
module.exports.post_stats_struct = post_stats_struct;
module.exports.choosen_users_struct = choosen_users_struct;