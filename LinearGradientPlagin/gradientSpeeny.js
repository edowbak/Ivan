// You can set two options: dag - start gradient angle(number),
// and colors - list of color which you want use in gradient(string, rgb() or hex format)
// Ex.: $("body").gradient("speenGradient", {deg:90, colors: "rgb(65, 1, 226), rgb(238, 1, 65), rgb(1, 244, 71)"});
// IMPORTANT this plagin can be use for body or some block element with sizes (width, height)

(function($){ // Init local jQuery scope

	var defoult = {
		deg: 0,
		colors: "rgb(65, 244, 226), rgb(238, 244, 65), rgb(65, 244, 71)"
	};

	// Init our privat method
	var methods = {
		speenGradient: function(userOptions){
			var z = $(this);// Set this method context

			setInterval(function(){
				var step = $(".panel-drager").val();
				userOptions.deg += 0.6 * step;
				userOptions.deg > 360 ? userOptions.deg = 0 : userOptions.deg;
				z.css("background", "linear-gradient(" + userOptions.deg + "deg," + userOptions.colors + ") fixed");
			}, 100);
		}
	}

// Init new jQuery method
	$.fn.gradient = function(option, options){
		// Check options, if user does't set custom optioms, using our defaults options
		var userOptions = $.extend({}, defoult, options);
		// Check for method, if method will be found return method with this context
		if(methods[option]){
			return methods[option].call(this, userOptions);
		}
	}

})(jQuery);