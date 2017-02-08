(function main(){
	//*********** Create variable **********
	var arrowLeft = $(".arrows-left"); // Take left arrow
	var arrowRight = $(".arrows-right");// Take right arrow
	var slider = $(".slider");// Take slider body
	var sliderWidth = parseInt(slider.css("width"));// Calc  slider body width
	var slideElement = $(".element");// Take some slider element
	var slideWidth = parseInt(slideElement.css("width"));// Calc width of the slider element
	//**************** Moving slides ********************
	arrowLeft.click(function(){
		var slidePosition = parseInt(slider.css("left"));// Take left value
		// Check left boundary and check double click
		if(slidePosition < 0 && (slidePosition%slideWidth === 0)){
			// Moving slider at the right
			slidePosition += slideWidth;
			slider.css("left", slidePosition);	
		}
	})
	arrowRight.click(function(){
		var slidePosition = parseInt(slider.css("left"));// Take left value
		 // Check right boundary and check double click
		if(slidePosition > -1*(sliderWidth - slideWidth*3) && (slidePosition%slideWidth === 0)){
			// Moving slider at the right
			slidePosition -= slideWidth;
			slider.css("left", slidePosition);
		}
	})
})();