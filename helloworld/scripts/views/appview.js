define(["backbone"], function (Backbone) {
	var AppView = Backbone.View.extend({
		el: "#greeting",

		initialize: function () {
			console.log("Up and running!");
			this.render();
		},

		render: function () {
			console.log("Render function");
			var html = "<h1>Hello World!</h1>";
			var greeting = "Hello World!";
			console.log(this.$el);
			this.$el.find("h1").html(greeting);
			return this;
		}
	});

	return AppView;
});