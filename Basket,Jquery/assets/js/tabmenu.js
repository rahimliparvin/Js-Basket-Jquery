
$(document).ready(function () {


    headers = $(".tab-menu .header div");

    contents = $(".tab-menu .content div");

    contents.hide();

    homeinfo = $(".homecont");

    homeinfo.show();


    for (const element of $(headers)) {
        $(element).click(function () {
            $(".active").removeClass("active");
            $(this).addClass("active");

            for (const content of $(contents)) {
                if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
                    $(content).show();
                }
                else {
                    $(content).hide();
                }
            }
        })
    }
})

