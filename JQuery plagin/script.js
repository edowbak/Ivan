(function($){
	var methods = {
		width: function(value){
			$(this).css("width", value);
		}
	}

	$.fn.setCss = function(option, value){
		if(methods[option]){
			return methods[option].call(this, value)
		}
	}
})(jQuery);

$(".block").setCss("width", "300px");