Template.post.helpers({
	likecount: function () {
		return Likes.find(this._id).count();
	},
	postComments : function () {
		return Posts.find({parent:this._id});	
	}
	});

Template.post.events({
	'keyup .commenttext': function (evt, tmpl) {
		if (evt.which === 13) {
			var commenttext = tmpl.find('.commenttext').value;	
			var options = {text:commenttext, parent:this._id};	
			Meteor.call('addPost',options);
			$('.commenttext').val("").select().focus();
	}
}});