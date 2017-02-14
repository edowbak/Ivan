/****************** Init some variables ********************/
var slidEl = $(".slider-element");
var slidElNumb = slidEl.length;
var contWidth = parseInt($(".container").css("width"));
var sliderWidth = (slidElNumb * contWidth);
var rightSide = -1*(sliderWidth-contWidth);
/********************* Set some sizes **********************/
$(".slider-element").css("width", contWidth + "px");
$(".slider").css("width", sliderWidth + "px");
/******************** Moving function **********************/
function moveRight(){
    var leftPos = parseInt($(".slider").css("left"));
    
    if((leftPos > rightSide) && (leftPos % contWidth === 0 )){
        var nowPos = parseInt($(".slider").css("left"));
        nowPos -= contWidth;
        console.log(nowPos);
        $(".slider").css("left", nowPos + "px");
    }
}
function moveLeft(){
    var leftPos = parseInt($(".slider").css("left"));

    if((leftPos < 0) && (leftPos % contWidth === 0 )){
        var nowPos = parseInt($(".slider").css("left"));
        nowPos += contWidth;
        console.log(nowPos);
        $(".slider").css("left", nowPos + "px");
    }
}

/****************** Catch event ****************************/
$(".slider-wrapper").click(function(e){
    if($(e.target).hasClass("arrows-right")) moveRight();
    if($(e.target).hasClass("arrows-left")) moveLeft();
})