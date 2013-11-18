require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),
	
	paths: {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone"
	}
});

require(["views/appview"], function (AppView) {
	new AppView;
});