
/**登录 电话号码和密码的验证**/
function vali(selector_input,selector_msg,reg,msg_right,msg_err,e){
    e.preventDefault();
    var txt=$(selector_input);
    var msg=$(selector_msg);
    if(reg.test(txt.val())) {
        msg.html(`${msg_right}`)
        .css("color","green");
    }
    else {
        msg.html(`${msg_err}`)
        .css("color","red");
    }
}
  $(".input_myphone").blur(function(e){
    if (!this.value) {
        $("#phone1").text("电话号码不能为空！");
        $("#phone1").css("color", "red");
        return false;
      }
       vali(".input_myphone","#phone1",/^\w{11}$/,"您的输入正确","电话号码错误！",e);
    });

  $(".input_mypwd").blur(function(e){
    if (!this.value) {
        $("#upwd1").text("密码不能为空！");
        $("#upwd1").css("color", "red");
        return false;
      }
        vali(".input_mypwd","#upwd1",/^\w{6,8}$/,"您的输入正确","密码错误！",e);
     });

    $("form").submit(function(e){
        vali(".input_myphone","#phone1",/^\w{11}$/,"您的输入正确","电话号码错误！",e);
        vali(".input_mypwd","#upwd1",/^\w{6,8}$/,"您的输入正确","密码错误！",e);
    })
 
 //登录验证
 var welcome = document.getElementById("welcome")
 var logout =  document.getElementById("logout")
 var login =  document.getElementById("logout")
   //session
function postMsg(){    
    var phone=document.getElementsByClassName ("input_myphone")[0].value;
    var upwd=document.getElementsByClassName("input_mypwd")[0].value;
 //session  存数据  
    sessionStorage.setItem("phone",phone);
    sessionStorage.setItem("upwd",upwd);
    var phone = sessionStorage.getItem("phone",phone);
    var upwd =  sessionStorage.getItem("upwd",upwd);
    if(phone=="13501234567" && upwd=="123456"){
        alert("登录成功");
        welcome.style.display="block"
        logout.style.display="block"
        sy.style.display="none";
        my_login_main.style.display="none";
        //动态加载用户 欢迎...
        welcome.innerHTML = "欢迎登录";
    } 
  
    // $.ajax({
    //     url:"http://127.0.0.1:3000/users/signin",
    //     type:"post",
    //     data:{phone,upwd},
    //     dataType:"json",
    //     success:function(data){
    //         console.log(data.ok);
    //         if(data.ok==1){
    //             location.href="http://localhost:3000/index.html";
    //         }
    //     }
    // });   
};
function logout1(){
    alert("是否确定退出?")
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("upwd");
    welcome.style.display="none";
    logout.style.display="none"; 
    sy.style.display="block";
    window.location.reload(true);
}


/*注册验证*/
function vali(selector_input,selector_msg,reg,msg_right,msg_err,e){
    e.preventDefault();
    var txt=$(selector_input);
    var msg=$(selector_msg);
    if(reg.test(txt.val())) {
        msg.html(`${msg_right}`)
        .css("color","green");
    }
    else {
        msg.html(`${msg_err}`)
        .css("color","red");
    }
}
  $("#phone_1").blur(function(e){
    if (!this.value) {
        $(".title_hide1").text("电话号码不能为空！");
        $(".title_hide1").css("color", "red");
        return false;
      }
    vali("#phone_1",".title_hide1",/^\w{11}$/,"您的输入正确","电话号码必须在11位！",e);
  });

  $("#upwd_1").blur(function(e){
    if (!this.value) {
        $(".title_hide3").text("密码不能为空！");
        $(".title_hide3").css("color", "red");
        return false;
      }
    vali("#upwd_1",".title_hide3",/^\w{6,8}$/,"您的输入正确","密码必须介于6-8位之间！",e);
  });

  $("form").submit(function(e){
    vali("#phone_1",".title_hide1",/^\w{11}$/,"您的输入正确","电话号码必须在11位！",e);
    vali("#upwd_1",".title_hide3",/^\w{6,8}$/,"您的输入正确","密码必须介于6-8位之间！",e);
  })

function postSuc(){  
    var phone=document.getElementById("phone_1")[0];
    var upwd=document.getElementById("upwd_1")[0];    
    console.log(phone,upwd);  
    // $.ajax({
    //     url:"http://127.0.0.1:3000/users/register",
    //     type:"post",
    //     data:{phone,upwd},
    //     dataType:"json",
    //     success:function(data){
    //         console.log(data.ok);
    //         if(data.ok==1){
    //             location.href="http://localhost:3000/index.html";
    //         }
    //     }
    // });
};


