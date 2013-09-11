// JavaScript Document
// Kyler Schroeder
// AFV 1309

// Instagram API
$(function() {
	// var tag = "bhgraffiti";
	var url = "https://api.instagram.com/v1/media/popular?client_id=9a4423b4dfdd4111a73d4bd39082f519";
	/*
	var tag = "graffiti";
	var url = "https://api.instagram.com/v1/tags" + tag + "media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;min_id=10"; */
	$.getJSON(url, feedGrid);
});

alert("getJSON");

var feedGrid = function(info) {
	
	alert("feedGrid");
	console.log(info);
	
	$("#data-msg").html("<h2>Instagram Results:</h2>");
	
	$.each(info.data, function(index, photo) {  // index is position in array of info.data
		var pic = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + 			", <em>(" + photo.user.name +")</em></h4></li>";
		$("#data-output").append(pic);
	}); // end each
}; // end feedGrid