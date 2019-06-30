(function(){
    if(location.search.indexOf("lid=")!=-1){
      var lid=location.search.split("=")[1];
      $.ajax({
        url:"http://localhost:3000/details",
        type:"get",
        data:`lid=${lid}`,
        dataType:"json",
        success:function(res){
            console.log(res); 
        }
      });
    }
     /*加减按钮设置*/
    $("#btn3").click(function(){
        var $n=parseInt($(this).prev().val());
        $n+=1;
        $(this).prev().val($n)
    })
    $("#btn1").click(function(){
        var $n=parseInt($(this).next().val());
        $n-=1;
        if($n<1) $n=1
        $(this).next().val($n);
    })

    /*大图效果设置*/
    $(".img_1").click(function(e){
        e.preventDefault();
        $(".img1").siblings().hide().siblings(".img1").show();
    })
    $(".img_2").click(function(e){
        e.preventDefault();
        $(".img2").siblings().hide().siblings(".img2").show();
    })
    $(".img_3").click(function(e){
        e.preventDefault();
        $(".img3").siblings().hide().siblings(".img3").show();
    })
    $(".img_4").click(function(e){
        e.preventDefault();
        $(".img4").siblings().hide().siblings(".img4").show();
    })
/*
    //放大镜
    var $mask=$("#mask"), $smask=$("#item-ef");
    var MSIZE=179,SMSIZE=358,MAX=SMSIZE-MSIZE;
  $smask.hover(
    function(){
      $mask.toggleClass("d-none");
      //$lgDiv.toggleClass("d-none");
    }
  ).mousemove(function(e){
    var top=e.offsetY-MSIZE/2;
    var left=e.offsetX-MSIZE/2;
    if(top<0) top=0; else if(top>MAX) top=MAX;
    if(left<0) left=0; else if(left>MAX) left=MAX;
    $mask.css({top,left})
    //$lgDiv.css(
      "backgroundPosition",
      `${-16/7*left}px ${-16/7*top}px`
    //)
  })*/
})()
