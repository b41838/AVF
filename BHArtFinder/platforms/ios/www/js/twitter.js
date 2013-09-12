// JavaScript Document


$(document).ready(function(e) {
    
    $('.twitter_feed').getmytweets({
        twitter_hashtag: 'graffiti', /* twitter hashtag.. without the # */
        twitter_wrap: 'tweet', /* wrap each tweet with a class */
        twitter_limit: 10, /* how many tweets to return */
    });
    
});