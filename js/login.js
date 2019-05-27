var type = "";
type = GetQueryString("type");

function choosetype(type) {
    chanage();
    if (type == "PERSON") {
        $(".choose_left").css("opacity", "1");
        type = "PERSON";
    } else {
        $(".choose_right").css("opacity", "1");
        type = "ENTERPRISE";
    }
}

function chanage() {
    $(".choose_left").css("opacity", "0.5");
    $(".choose_right").css("opacity", "0.5");
}

function submit() {
    $(".box_submit").click(function () {
        var userType = type;
        var url;
        if (userType == '' || userType == null) {
            alert("请选择用户类型");
            return false;
        }
        if (userType == 'PERSON') {
           url= "https://apply.hnjdctk.gov.cn/apply/app/user/person/login";
        } else if (userType == 'ENTERPRISE') {
            url= "https://apply.hnjdctk.gov.cn/apply/app/user/enterprise/login";
        } else {
            return false;
        }
        $("#myManage").taiji("ajaxForm", $("#loginForm"), {
            bsSuccess: function (data, note) {
                var loginResult = $.parseJSON(data);
                window.location = loginResult.rediectUrl;
            }
        });
        $.post(
            url,
            {
                loginName:$("phone").val(),
                passwd:$("phone").val(),
                picValidCode:$("phone").val(),
                loginName:$("phone").val(),
            },
            function (result) {

            }
        );
        return false;
    });

}