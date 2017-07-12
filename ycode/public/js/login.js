define(['jquery',], function ($) {
    $("#fromlogin").submit(function () {
        var data = $("#fromlogin").serializeArray();
        $.ajax({
            url: "/api/login",
            type: "post",
            data: data,
            success: function (data) {
                if (data["code"] == 200) {
                    console.log(JSON.stringify(data.result));
                    window.location.href = "index";
                    $.cookie("data", JSON.stringify(data.result));
                }
            },
            error: function () {
                alert("用户名或密码错误");
            }
        })

        return false;//阻止浏览器默认行为
    })
});