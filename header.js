$(function(){
    var $link=$(`<link rel=stylesheet href="css/header.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#header");
        }
    })  
     //搜索
    $('body').on('click', '.search_btn', function() {
        var kw = $('.head_search_input').val();
        var loc = 'details.html';
        if(kw!==""){
            loc += '?kw='+kw;
            location.href = loc;
        }
        else alert("请输入搜索的内容");
    })
    $('body').on('keyup', '.head_search_input',function(e){
        if(e.keyCode==13) $(".search_btn").click();
    })
})
