var pingdom = (function($) {

	var config = {
		url: "/pingdom_api.php",
		interval: 5 * 1000,
		element: "#pingdom"
	};

	function get(url, callback) {
		$.getJSON(url, callback);
	};

	function display(data) {
		var i, f, check, li, ul;

		if (data.error) {
			// error message from pingdom
			console.log(data.error.errormessage);
			return;
		}

		ul = $('<div/>')
		// display checks
		for (i = 0; i < data.checks.length; i++) {
			check = data.checks[i];

			li = config.fields.map(function(field) {
				return '<li class="field-' + field.name + '">' + field.render.call(null, check[field.name]) + '</li>';
			});

			ul.append('<ul class="check">' + li.join('') + '</ul>');
		}

		$(config.element).empty().append(ul);
	};

	return {
		init: function(fields) {
			config.fields = fields;

			setInterval(function() {
				get(config.url, display);
			}, config.interval);
		}
	}
})(jQuery);

$(function() {
	var timeFormat = "ddd, MMM d HH:mm",

		// array of check fields to display, and a render
		// function that returns how they are displayed
	    fields = [
			{
				name: "status",
				render: function(value) {
					return '<div class="status status-' + value + '"></div>';
				}
			},
			{
				name: "name",
				render: function(value) {
					return value;
				}
			},
			{
				name: "lasterrortime",
				render: function(value) {
					var d = new Date(value * 1000);
					return d.toString(timeFormat);
				}
			},
			{
				name: "lasttesttime",
				render: function(value) {
					var d = new Date(value * 1000);
					return d.toString(timeFormat);
				}
			},
			{
				name: "lastresponsetime",
				render: function(value) {
					return value + " ms";
				}
			}
		];

	pingdom.init(fields);
});