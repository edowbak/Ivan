$(".search-button-block").click(function(){
	if($(".menu").css("top") == "75px"){
		$(".menu").css("top","-500px");
	} else 	if($(".search-button").css("display") == "none"){
		$(".menu").css("top", "75px");
	}
})
$(".select-1").click(function(e){
	if($(this).css("height") === "50px"){
		$(this).css("height", "200px");
		$(".select-2").css("height", "50px")
	}else{
		$(this).css("height", "50px");
	}
})
$(".select-2").click(function(e){
	if($(this).css("height") === "50px"){
		$(this).css("height", "200px");
		$(".select-1").css("height", "50px")
	}else{
		$(this).css("height", "50px");
	}
})
$(".select-item").click(function(e){
	var dataAttr = $(this).data("selection");
	var dataText = $(this).text();
	var dataSelect = $(this).data("select");
	$(".select[data-select = "+ dataSelect +"] > span").text(dataText);
	$(".select[data-select = "+ dataSelect +"]").attr("data-selection", dataAttr);
})