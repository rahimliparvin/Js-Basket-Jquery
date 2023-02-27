$(document).ready(function () {

    box = $(".box")

    open = $(".hamburger")

    close = $(".close")

    open.click(function () {
        open.hide();
        close.show();
        box.removeClass("hide-box");
    })

    close.click(function () {
        open.show();
        close.hide();
        box.addClass("hide-box")
    })
})