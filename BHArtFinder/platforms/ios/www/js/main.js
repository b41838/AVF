// JavaScript Document
// Kyler Schroeder
// AFV 1309

// Waiting for device API libraries to load

document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are now available
    
function onDeviceReady() {
	$("#nativeCamera").on("pageinit", cameraFunc);
	$("#nativeCapture").on("pageinit", captureFunc);
	$("#nativeGeo").on("pageinit", geoFunc);
	$("#nativeContacts").on("pageinit", contactsFunc);
	$("#nativeCompass").on("pageinit", compassFunc);
	console.log("good to go");
 
// device is now ready

};
	
var cameraFunc = function() {
	pictureSource=navigator.camera.PictureSourceType;
	destinationType=navigator.camera.DestinationType;
	
	// Called when a photo is successfully retrieved
	
	function onPhotoDataSuccess(imageData) {
	// Uncomment to view the base64-encoded image data
	// console.log(imageData);
	
	// Get image handle
	
	var smallImage = document.getElementById('smallImage');
	
	// Unhide image elements
	
	smallImage.style.display = 'block';
	
	// Show the captured photo
	// The inline CSS rules are used to resize the image
	
	smallImage.src = "data:image/jpeg;base64," + imageData;
	}
	
	// Called when a photo is successfully retrieved
	
	function onPhotoURISuccess(imageURI) {
	// Uncomment to view the image file URI
	// console.log(imageURI);
	
	// Get image handle
	
	var largeImage = document.getElementById('largeImage');
	
	// Unhide image elements
	
	largeImage.style.display = 'block';
	
	// Show the captured photo
	// The inline CSS rules are used to resize the image
	
	largeImage.src = imageURI;
	}
	
	// A button will call this function
	
	function capturePhoto() {
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.DATA_URL });
	}
	
	// A button will call this function
	
	function capturePhotoEdit() {
	// Take picture using device camera, allow edit, and retrieve image as base64-encoded string
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
	destinationType: destinationType.DATA_URL });
	}
	
	// A button will call this function
	
	function getPhoto(source) {
	// Retrieve image file location from specified source
	navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
	destinationType: destinationType.FILE_URI,
	sourceType: source });
	}
	
	// Called if something bad happens.
	
	function onFail(message) {
		alert('Failed because: ' + message);
	}
}
	
var captureFunc = function() {

}

var geoFunc = function() {
	navigator.geolocation.getCurrentPosition(geoWin, geoFail);
	
	// if successful get latitude and longitude for users current location
	function geoWin(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: '           + position.coords.latitude           + '<br />' +
							'Longitude: '          + position.coords.longitude			+ '<br />';
							//'Timestamp: '          + position.timestamp                 + '<br />'
	}

	// if fail throw error
	function geoFail(error) {
		alert('code: '    + error.code    + '\n' +
			  'message: ' + error.message + '\n');
	};
};

var contactsFunc = function() {
	
}

var compassFunc = function() {
/*	navigator.compass.getCurrentHeading(compassWin, compassFail);
	
	// if success get current heading
	function compassWin(heading) {
		var display = document.getElementById('displayHeading');
		display.innerHTML = 'Heading: ' + heading.magneticHeading;
	}

	// if fail, throw error
	function compassFail(compassError) {
		alert('Compass Error: ' + compassError.code);
	}*/
}

$('#instagramFeed').on('pageinit', function() {

	// Instagram API
	
		// var tag = "bhgraffiti";
		var tag = "graffiti";
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;count=12";
		
		$.getJSON(url, getFeed);
});
	
	var getFeed = function(info) {

		console.log(info);
		
		$("#instagramStatus").html("<h2>Instagram Results:</h2>");
		
		$.each(info.data, function(index, photo) {  // index is position in array of info.data
			var pic = "<li><img src='" + photo.images.thumbnail.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + 			", <em>(" + photo.user.name +")</em></h4></li>";
			$("#pullFeed").append(pic);
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