
var flag1=false;
var textIndex=0;
var timer;

var mySwiper= new Swiper('.swiper-container',{
  resistance:"100%",
  initialSlide:3,
  onTouchStart:function(swiper){
    if(swiper.activeIndex==2){
      if(!flag1){
        swiper.lockSwipes()
        $(".bg3-active").addClass("active");
        flag1=true;
        setTimeout(function(){
          mySwiper.unlockSwipes()
        },200)
      }
    }

    return false;
  },
  onTransitionEnd:function(swiper){
    if(swiper.activeIndex==2){
      //文字动画
      timer=setInterval(function(){
        var text="工作忙，不回了".slice(0,textIndex)
        $(".msg-text").text(text)
        textIndex++;
        if(textIndex==8){
          clearInterval(timer)
        }
      },500)
    }
  }
});
//mySwiper.lockSwipes()

var loading=$(".loading");
var i=0;
var time=setInterval(function(){
  i++;
  loading.text(i+"%")
  if(i>=100){
    clearInterval(time)
    mySwiper.unlockSwipes()
    //mySwiper.slidePrev()
  }
},70)


//确认上传
$(".btn-up").click(function () {
  if($('#form').find("input").val()){

    $(".up-con").eq(1).addClass("active").siblings().removeClass("active");


    // 上传代码
    /*jQuery('#form').ajaxSubmit({
      url: '/file',
      success:function(result) {
        alert(result)
      }
    });*/

  }else{
    //alert("请先上传图片");
    $(".up-con").eq(1).addClass("active").siblings().removeClass("active");
  }

})

$(".share").click(function(){
  $(".bg-share").addClass("active");
})


//上传图片
$(".btn-up-con").click(function(){
  $('#form').find("input").click()
})

$(".btn-coupon").click(function(){
  $(".coupon").addClass("active");
})

$(".coupon-close").click(function(){
  $(".coupon").removeClass("active");
})


