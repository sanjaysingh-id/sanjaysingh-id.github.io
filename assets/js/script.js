$(document).ready(function () {
	// GET YOUTUBE API
	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/channels',
		type: 'get',
		dataType: 'json',
		data: {
			key: 'AIzaSyDX9gyh0_wx75NXuCz4i267um-2R2jPXHg',
			part: 'snippet,statistics',
			id: 'UCjJJmHoo8da_WOBehdBTYaQ',
		},
		// if success
		success: function (result) {
			const title = result.items[0].snippet.title;
			const profilePic = result.items[0].snippet.thumbnails.medium.url;
			const tsubs = result.items[0].statistics.subscriberCount;
			const subs = tsubs.toLocaleString();
			$('.channel-name').append(title);
			$('.subs').append(subs, ' Subscriber');
			$('.profilePic').attr('src', profilePic);
		},
	});
	// GET INSTAGRAM API
	// $.ajax({
	// 	url: 'https://www.googleapis.com/youtube/v3/channels',
	// 	type: 'get',
	// 	dataType: 'json',
	// 	data: {
	// 		key: 'AIzaSyDX9gyh0_wx75NXuCz4i267um-2R2jPXHg',
	// 		part: 'snippet,statistics',
	// 		id: 'UCjJJmHoo8da_WOBehdBTYaQ',
	// 	},
	// 	// if success
	// 	success: function (ig) {
	// 		console.log(ig);
	// 	},
	// });
});
