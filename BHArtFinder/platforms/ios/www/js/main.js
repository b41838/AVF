// JavaScript Document
// Kyler Schroeder
// AFV 1309

$('#instagramFeed').on('pageinit', function() {

	// Instagram API
	
		// var tag = "bhgraffiti";
		var tag = "graffiti";
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;count=12";
		
		$.getJSON(url, screenOutput);
});
	
	var screenOutput = function(info) {

		console.log(info);
		
		$("#data-msg").html("<h2>Instagram Results:</h2>");
		
		$.each(info.data, function(index, photo) {  // index is position in array of info.data
			var pic = "<li><img src='" + photo.images.thumbnail.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + 			", <em>(" + photo.user.name +")</em></h4></li>";
			$("#data-output").append(pic);
		}); // end each
		
		$("li:nth-child(3n+1)").addClass("ui-block-a");
		$("li:nth-child(3n+2)").addClass("ui-block-b");
		$("li:nth-child(3n+3)").addClass("ui-block-c");
	}; // end screenOutput


$('#twitterFeed').on('pageinit', function() {

    $('.twitter_feed').getmytweets({
        twitter_hashtag: 'graffiti', /* twitter hashtag.. without the # */
        twitter_wrap: 'tweet', /* wrap each tweet with a class */
        twitter_limit: 10 /* how many tweets to return */
    });

});