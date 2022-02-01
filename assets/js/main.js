$(function() {

    // Change active class in navbar items

    $('.navbar-nav .nav-item a').click(function() {
        $(this).addClass('active').parent().siblings().find("a").removeClass('active');
    });


    // sync active class with scroll

    $(window).scroll(function() {
        $("section").each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                var sectionId = "#" + $(this).attr("id");
                $('.navbar-nav .nav-item a[href="' + sectionId + '"]').addClass('active').parent().siblings().find("a").removeClass('active');
            }
        });
    });
});