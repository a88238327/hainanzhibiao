var type = "";
type = GetQueryString("type");
var url;
choosetype(type);
function choosetype(type) {
    chanage();
    if (type == "PERSON") {
        $(".choose_left").css("opacity", "1");
        type = "PERSON";
        $("#loginForm").attr("action","https://apply.hnjdctk.gov.cn/apply/app/user/person/login");
        url="https://apply.hnjdctk.gov.cn/apply/app/user/person/login";
    } else {
        $(".choose_right").css("opacity", "1");
        type = "ENTERPRISE";
        $("#loginForm").attr("action","https://apply.hnjdctk.gov.cn/apply/app/user/enterprise/login");
        url="https://apply.hnjdctk.gov.cn/apply/app/user/enterprise/login";
    }
}

function chanage() {
    $(".choose_left").css("opacity", "0.5");
    $(".choose_right").css("opacity", "0.5");
}

function submit() {
    $(".box_submit").click(function () {
        var userType = type;
        if (userType == '' || userType == null) {
            alert("请选择用户类型");
            return false;
        }
        // $("#myManage").taiji("ajaxForm", $("#loginForm"), {
        //     bsSuccess: function (data, note) {
        //         var loginResult = $.parseJSON(data);
        //         window.location = loginResult.rediectUrl;
        //     }
        // });
        // console.log(url);
        // $.post(
        //     url,
        //     {
        //         loginName:$("#loginName").val(),
        //         passwd:$("#passwd").val(),
        //         picValidCode:$("#picValidCode").val()
        //     },
        //     function (result) {
        //         console.log(result);
        //         $("#code_img").click();
        //         var obj=JSON.parse(result);
        //     }
        // );
        $(".box_submit").taiji("ajaxForm",$("#loginForm"),{bsSuccess:function(data,note){
                var loginResult = $.parseJSON(data);
                window.location=loginResult.rediectUrl;
            }
        });
        return false;
    });

}
var i=0;
$("#code_img").click(function(){
    i++;
    $("#code_img").attr("src","https://apply.hnjdctk.gov.cn/apply/app/validCodeImage?ee="+i+"&i="+Math.random());
});
window.onload=function () {
    $("#code_img").click();
    submit();
};
