var mySwiper= new Swiper('.swiper-container',{
  resistance:"100%",
  direction:"vertical",
  initialSlide:0,
  onTransitionEnd:function(swiper){
    if(swiper.activeIndex==1){
      $(".logo").addClass("active")
    }
    if(swiper.activeIndex==2){
      $(".logo2").addClass("active")
    }
    if(swiper.activeIndex==3){
      $(".movie-con").addClass("active")
    }
  }
});
$(".page1--center").addClass("active")


$(".btn2").click(function(){
  $(".share-con-con").addClass("active");
})

$(".share-con-con").click(function(){
  $(this).removeClass("active");
})

$("#myaudio").click(function(){
  var myAuto = document.getElementById('myaudio');
  myAuto.play();
})

$(".music").click(function(){

  if($(this).hasClass("active")){
    var myAuto = document.getElementById('myaudio');
    myAuto.play();
  }else{
    var myAuto = document.getElementById('myaudio');
    myAuto.pause();
  }
  $(this).toggleClass("active");
})
