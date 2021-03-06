define(["backbone", "underscore", "handlebars", "text!templates/test.html"], function (Backbone, _, Handlebars, TestTemplate) {
	var AppView = Backbone.View.extend({
		el: "#greeting",

		//template: _.template(TestTemplate),
		template: Handlebars.compile(TestTemplate),

		initialize: function () {
			console.log("Up and running!");
			this.render();
		},

		render: function () {
			console.log("Render function");
			var html = "<h1>Hello World!</h1>";
			var greeting = "Hello World!";
			//this.$el.find("h1").html(greeting);
			this.$el.html(this.template({greeting: greeting}));
			return this;
		}
	});

	return AppView;
});