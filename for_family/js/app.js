
var flag1=false;
var textIndex=0;
var timer;
var timerMusic;
var musicIndex=0;

var mySwiper= new Swiper('.swiper-container',{
  resistance:"100%",
  initialSlide:2,
  onTransitionEnd:function(swiper){

    if(swiper.activeIndex==1){

      if(!flag1){
        flag1=true;

        swiper.lockSwipes()

        $(".msg").addClass("active")

        //文字动画
        setTimeout(function(){

          $("#sound3")[0].play();

          text();
          timer=setInterval(function(){
            text();
          },500)
        },700)

        setTimeout(function(){
          $(".bg3-active").addClass("active");
        },6000)

        setTimeout(function(){
          mySwiper.unlockSwipes()
          mySwiper.slidePrev()
        },8000)
      }

    }

  }
});
mySwiper.lockSwipes()

var loading=$(".loading-text");
var i=0;
var time=setInterval(function(){
  i++;
  loading.text(i+"%")
  if(i>=100){
    clearInterval(time)
    mySwiper.unlockSwipes()
    $("#bg1").hide()
    $("#bg2").addClass("active");
    begin()
  }
},70)

function begin(){
  $(".wei-con").addClass("active")
  play();
  timerMusic=setInterval(function(){
    play();
  },2000)
}


//确认上传

$(".up").click(function(){
  $(".up-step").eq(1).addClass("active").siblings().removeClass("active");
})

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


function play(){
  var music=$("#sound"+musicIndex)[0];
  music.play();
  musicIndex++;
  if(musicIndex==3){
    clearInterval(timerMusic);
  }
}

function text(){
  var text="工作忙，不回了".slice(0,textIndex)
  $(".msg-text").text(text)
  textIndex++;
  if(textIndex==8){
    clearInterval(timer)
  }
}

