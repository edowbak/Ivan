$(".search-button-block").click(function(){
	if($(".menu").css("top") == "75px"){
		$(".menu").css("top","-500px");
	} else 	if($(".search-button").css("display") == "none"){
		$(".menu").css("top", "75px");
	}
})
