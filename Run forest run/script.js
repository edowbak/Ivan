(function(){
	/******************* Runing text *****************/
	function runText(){
		var count = 0;
		setInterval(function(){
			count += 1;
			
			var rightBound = $(window).width() + $(".running-text").width();
			var leftBound = 0 - $(".running-text").width();
			
			if(count > rightBound) count = leftBound;
			$(".running-text").css("left", count + "px");
		}, 20);
	}

	/********************* Last letter uppercase ********************/

	function toUpperLastCase(element){
		var str = $(element).text();
		var arr = str.split(" ");
		var newArr = [];
		var newStr;

		for(i = 0; i<arr.length; i++){
			var wordArr = arr[i].split("");
			var lastLetterIndex = wordArr.length-1;
			var newLeter = wordArr[lastLetterIndex].toUpperCase();
			wordArr.splice(lastLetterIndex, 1, newLeter);
			newArr.push(wordArr.join(""));
		}

		newStr = newArr.join(" ");

		$(".running-text").text(newStr);
	}
/***************************** Show click number at the click place ***********************************/
	function catchClick(){
		var count = 0;
		$(window).on("click", function(e){
			count++;
			var xPos = e.pageX + "px";
			var yPos = e.pageY + "px";
			$(".clickCatcher").text(count);
			$(".clickCatcher").css({"left":xPos,"top":yPos});
		});
	}
/************************* Random backgraund-color every 5s ***************************/
	function randomBg(){
		setInterval(function(){
			var rand = Math.round(100 + Math.random() * (999 - 100));
			var hex = rand.toString(16);
			$("body").css("background-color", "#" + hex);
		}, 5000);
	}
/*************************** Woul'd you like Rock'nRoll? *******************************/
	toUpperLastCase(".running-text");
	runText();
	catchClick()
	randomBg();
})();