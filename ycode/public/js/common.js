
define(['jquery', 'cookie', "nprogress", "template"], function ($, cookie, NProgress, template) {
	// NProgress.start();

	// NProgress.done();
	$('.navs a').on("click", function () {
		$('.navs a').removeClass("active");
		$(this).addClass("active");
	})
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();

	});
	//判断是否是首次 浏览页面 或者登陆之后超过20分钟 没有操作页面 如果是 用户只能访问登陆页面
	if (!$.cookie("PHPSESSID") && location.pathname != "/login" && location.pathname != "/dashboard/login") {
		location.href = "/login";
	}

	//  JSON.parse($.cookie("data")) 登陆成功之后就接收数据 渲染到前台页面
	if (location.pathname !== "/login" && location.pathname != "/dashboard/login") {
		var asideStr = template("tpl-aside", JSON.parse($.cookie("data")));
		$(".aside>.profile").html(asideStr);
	}

	$("#loginout").on("click", function () {
		$.ajax({
			url: "/api/logout",
			type: "post",
			success: function (data) {
				location.href = "/login";
			}
		})
	})
});
