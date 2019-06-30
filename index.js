//页面顶部图片效果设置
    $(".big-img>img").hide();
    $(".banner1-button").click(function(){
        var $sm=$(".small-img>img");
        var $bg=$(".big-img>img");
        $sm.hide(3000);
        $bg.show(3000);
        $(this).hide();
        $(".banner2-button").show();
    })
    
    $(".banner2-button").click(function(){
        var $sm=$(".small-img>img");
        var $bg=$(".big-img>img");
        $bg.hide();
        $sm.show();
        $(this).hide();
        $(".banner1-button").show();
    })
