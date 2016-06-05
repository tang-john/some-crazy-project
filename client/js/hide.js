$(function () {

    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass("hidden");

        changeColMainClass();
    });

    function changeColMainClass() {
        var colLeftIsVisible = isVisible("colLeft");
        var colRightIsVisible = isVisible("colRight");
        var num = 0 + colLeftIsVisible + colRightIsVisible;
        var currentClass = "col-md-" + (12 - (num * 2));
        var transMicroSec = 1;

        $("#colMain").removeClass("col-md-8");
        $("#colMain").removeClass("col-md-10");
        $("#colMain").removeClass("col-md-12");
        $("#colMain").addClass(currentClass, transMicroSec);


    }

    function isVisible(id, className) {
        var selector = (id != null) ? "#" + id  : "." + className;
        var classes =  $(selector).attr("class");
        var rc = ! $(selector).hasClass("hidden");

        return rc;
    }
});