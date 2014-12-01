Meteor.publish('posts', function(){
	return Posts.find({});
});

Meteor.publish('likes', function(postid){
	return Likes.find({post:postid});
});


Meteor.methods({
	// {text:"",owner:"",date:"",parent:""}
	'addPost': function(options) {
	var post = {
		text:options.text,
		owner:Meteor.userId(),
		date: new Date(),
		parent:options.parent
	}; 
		Posts.insert(post, function() {console.log("added");
	});
	},
	'removePost': function(id) {
		Posts.remove({_id:id}, function() {console.log("removed");
	});
	},
	'removeAllPosts': function (){Posts.remove({}, function() {
		console.log("removedAll");
		});
	}

});