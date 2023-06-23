$(function() {
    var pos = $("nav").offset().top;
    var height = $("nav").outerHeight();
    $(window).scroll(function () {
        if ($(this).scrollTop() > pos) {
            $("nav").addClass("fix");
            $("body").css("padding-top", height);
        } else {
            $("nav").removeClass("fix");
            $("body").css("padding-top", 0);
        }
    });
});

$(function () {
    // 1.#global_nav liにhoverメソッドを設定
    $("#global_nav").children("li").hover(function(){
        // 2.メニューの開閉
        $(this).children("ul").stop().slideToggle(180);
    });
});