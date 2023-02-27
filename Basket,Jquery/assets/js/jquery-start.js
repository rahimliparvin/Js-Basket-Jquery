$(document).ready(function () {
    // console.log("sdsdsds");

    //    let elem = document.querySelector("h1");
    //    console.log(elem);

    let elem = $("h1");
    // console.log(elem);
    // console.log(elem.text());
    // console.log(elem.text("Sagollar").text());
    // console.log(elem.html());
    // console.log(elem.text("<span>salam</span>"));
    // console.log(elem.html("<span>salam</span>"));
    //console.log(elem.html("salam").text());

    // $("button").click(function () {
    //     // console.log("test");
    //     //console.log(this);
    //     // $(this).css("background-color","red");

    // })

    //     $(".check").click(function () {
    //         // console.log("test");
    //         //console.log(this);
    //         $(this).css("background-color", "red")
    //     })

    //     $(".add").click(function () {
    //         // console.log("test");
    //         //console.log(this);
    //          $(this).css("background-color","magenta");
    //          $(this).next().css("background-color","magenta");
    // })

    $(".content").hide();

    $(".hide").click(function () {

        $(".content").slideUp(2000,function(){
            console.log("salam");
        });
      
    })

    // $(".show").click(function () {

    //     $(".content").show(2000, function () {
    //         $(this).css("background-color", "blue");
    //     })


    // })

    // $(".toggle").click(function () {

    //     $(".content").toggle(2000);
    // })

    $(".show").click(function () {

        $(".content").slideDown(2000, function () {
            $(this).css("background-color", "blue");
        });
    })

    $(".toggle").click(function () {

        $(".content").slideToggle(500);
    })


})
