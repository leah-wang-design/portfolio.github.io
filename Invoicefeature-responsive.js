$(document).ready(function() {

    $(window).on('scroll', function() {
        const y = $(this).scrollTop();
        const mockupimg = $(".animationsections").position();
        if (y > mockupimg.top) {
            $("#mockupimage1").delay(0).fadeIn(800);
            $("#mockupimage2").delay(800).fadeIn(800);
            $("#mockupimage3").delay(1600).fadeIn(800);
        }
    });
    // var small = { width: "100%" };
    // var large = { width: "300%" };
    // var count = 1;
    // $("#feedback").css(small).on('click', function() {
    //     $(this).animate((count == 1) ? large : small);
    //     count = 1 - count;
    // });

    // var small = { width: "100%" };
    // var large = { width: "300%" };
    // var count = 1;
    // $("#feedback").css(small).on('click', function() {
    //     $(this).animate((count == 1) ? large : small);
    //     count = 1 - count;
    // });

})
$(document).ready(function() {
    $("#linkedinpng").hover(
        function() { $(this).attr("src", "linkedin-in-brands-hover.svg"); },
        function() {
            $(this).attr("src", "linkedin-in-brands.svg");
        });
    $("#emailpng").hover(
        function() { $(this).attr("src", "envelope-regular-hover.svg"); },
        function() {
            $(this).attr("src", "envelope-regular.svg");
        });
    $("#mediumpng").hover(
        function() { $(this).attr("src", "medium-hover.svg"); },
        function() { $(this).attr("src", "medium.svg"); }
    )
});


$(document).ready(function() {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

})
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function() {
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            var currentdot = document.getElementsByClassName(" dotactive");
            //    console.log(currentdot.className);
            if ((current.length > 0) && (currentdot.length > 0)) {
                current[0].className = current[0].className.replace(" active", "");
                currentdot[0].className = currentdot[0].className.replace(" dotactive", "");
            }
            this.className += " active";
            console.log($('.btn a span').attr('class'));
            $("a span", this).addClass(" dotactive");
        });
    }

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        const wide1 = $("#feedback").position();
        var wide1top = wide1.top - 300;
        var wide1bottom = wide1.top + 300;
        console.log("wide1" + wide1top)
        var width = $(window).width()
        console.log("width" + width)
        const test = $(".bottomnav").position();
        if (width > 1487 && y > 4000 && y < wide1top || y > wide1bottom && y < test.top - 500) {
            $('.navigationbar').fadeIn({ duration: 800 });
        } else {
            $('.navigationbar').fadeOut();
        }
    });

    $(window).on('scroll', function() {
        //  const y = $(this).scrollTop();
        const top1 = $("#Day1").position();
        const sectiontop1 = top1.top - 100;
        console.log("section1")
        const top2 = $("#Day2").position();
        const sectiontop2 = top2.top - 100;
        const top3 = $("#Day3").position();
        const sectiontop3 = top3.top - 100;
        const top4 = $("#Day4").position();
        const sectiontop4 = top4.top - 100;
        const top5 = $("#Day5").position();
        const sectiontop5 = top5.top - 100;
        const top6 = $("#NextStep").position();
        const sectiontop6 = top6.top - 100;
        if ($(window).scrollTop() >= sectiontop1) {

            console.log("inside");
            $("#1").addClass("active");
            $("#1 span").addClass("dotactive");
            $("#2").removeClass("active");
            $("#3").removeClass("active");
            $("#2 span").removeClass("dotactive");
            $("#3 span").removeClass("dotactive");
            $("#4").removeClass("active");
            $("#4 span").removeClass("dotactive");
            $("#6").removeClass("active");
            $("#6 span").removeClass("dotactive");
            if ($(window).scrollTop() >= sectiontop2) {
                $("#2").addClass("active");
                $("#2 span").addClass("dotactive");
                $("#1").removeClass("active");
                $("#3").removeClass("active");
                $("#1 span").removeClass("dotactive");
                $("#3 span").removeClass("dotactive");
                $("#4").removeClass("active");
                $("#4 span").removeClass("dotactive");
                $("#6").removeClass("active");
                $("#6 span").removeClass("dotactive");
                if ($(window).scrollTop() >= sectiontop3) {
                    $("#3").addClass("active");
                    $("#3 span").addClass("dotactive");
                    $("#2").removeClass("active");
                    $("#1").removeClass("active");
                    $("#4").removeClass("active");
                    $("#4 span").removeClass("dotactive");
                    $("#2 span").removeClass("dotactive");
                    $("#4 span").removeClass("dotactive");
                    $("#6").removeClass("active");
                    $("#6 span").removeClass("dotactive");
                    if ($(window).scrollTop() >= sectiontop4) {
                        $("#4").addClass("active");
                        $("#4 span").addClass("dotactive");
                        $("#6").removeClass("active");
                        $("#3").removeClass("active");
                        $("#2").removeClass("active");
                        $("#1").removeClass("active");
                        $("#5").removeClass("active");
                        $("#3 span").removeClass("dotactive");
                        $("#5 span").removeClass("dotactive");
                        if ($(window).scrollTop() >= sectiontop5) {
                            $("#5").addClass("active");
                            $("#5 span").addClass("dotactive");
                            $("#6").removeClass("active");
                            $("#6 span").removeClass("dotactive");
                            $("#4").removeClass("active");
                            $("#3").removeClass("active");
                            $("#2").removeClass("active");
                            $("#1").removeClass("active");
                            $("#4 span").removeClass("dotactive");
                            if ($(window).scrollTop() >= sectiontop6) {
                                $("#6").addClass("active");
                                $("#6 span").addClass("dotactive");
                                $("#5").removeClass("active");
                                $("#4").removeClass("active");
                                $("#4 span").removeClass("dotactive");
                                $("#3").removeClass("active");
                                $("#2").removeClass("active");
                                $("#1").removeClass("active");
                                $("#5 span").removeClass("dotactive");
                            }
                        }
                    }
                }
            }
        }
    })
});