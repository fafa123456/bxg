requirejs.config({
        baseUrl: "/ycode/",
        paths: {
            "jquery": "assets/jquery/jquery.min",
            "bootstrap":"assets/bootstrap/js/bootstrap.min",
            "nprogress":"assets/nprogress/nprogress",
            "cookie":"assets/jquery-cookie/jquery.cookie",
            "template":"assets/artTemplate/template",
            "echarts":"assets/echarts/echarts.min",
            "common":"public/js/common"
        },
        shim: {
            "bootstrap": {
                deps: ["jquery"]
            }
        }
    });