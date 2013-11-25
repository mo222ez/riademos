require.config({
	urlArgs: "bust=" +  (new Date()).getTime(),

	paths: {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone",
		"text": "vendor/requirejs/text",
		"handlebars": "vendor/handlebars/handlebars-v1.1.2"
	},

	shim: {
		"handlebars": {
			exports: 'Handlebars'
		}
	}
});

require(["views/appview"], function (AppView) {
	new AppView;
});