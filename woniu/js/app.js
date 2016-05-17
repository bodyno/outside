var mySwiper= new Swiper('.swiper-container',{
  resistance:"100%",
  direction:"vertical",
  initialSlide:2,
  onTransitionEnd:function(swiper){
    if(swiper.activeIndex==1){
      $(".logo").addClass("active")
    }
    if(swiper.activeIndex==2){
      $(".logo2").addClass("active")
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
