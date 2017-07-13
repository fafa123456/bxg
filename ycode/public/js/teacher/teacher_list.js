define(['jquery', 'template','bootstrap'], function ($, template,boot) {
    $.ajax({
        url: "/api/teacher",
        type: "get",
        success: function (data) {
            if (data["code"] == 200) {
                var tplStr = template("teacher_list_tpl", data);
                // console.log(data);
                $(".table-hover tbody").html(tplStr);
            }
        }
    });

    $(".table-hover").on("click", "#cak", function () {
        var tid = $(this).parent().attr("data-id");
        console.log($(this).parent().attr("data-id"));
        $.ajax({
            url: "/api/teacher/view",
            type: "get",
            data: {
                "tc_id": tid
            }, success: function (data) {
                if (data["code"] == 200) {
                    var xqStr = template("teacher_xq_tpl", data.result);
                    //  console.log(data.result);
                    $(".table-condensed>tbody").html(xqStr);
                    
                    $('#teacherModal').modal();  //让模态框弹出来
                }
            }
        })
    });
});