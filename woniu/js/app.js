var mySwiper= new Swiper('.swiper-container',{
  resistance:"100%",
  direction:"vertical",
  initialSlide:0
});

$(".page1--center").addClass("active")


$(".btn2").click(function(){
  $(".share-con-con").addClass("active");
})

$(".share-con-con").click(function(){
  $(this).removeClass("active");
})
