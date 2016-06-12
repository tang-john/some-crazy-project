$(function () {

    $('.toggle').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass("hidden");

        changeAppMainColumn();
        changePageMainColumn();
    });

    /*
     This function changes the colMain width defined in app.js
     */
    function changeAppMainColumn() {
        var colLeftIsVisible = isVisible("colLeft");
        //var colRightIsVisible = isVisible("colRight");
        var num = 0 + colLeftIsVisible;
        var currentClass = "col-md-" + (12 - (num * 2));
        var transMicroSec = 1;

        $("#colMain").removeClass("col-md-8 col-md-10 col-md-12");
        $("#colMain").addClass(currentClass, transMicroSec);


    }

    /*
     This function changes the pageColMain width defined in admin-users.js, admin-assets.js
     */
    function changePageMainColumn() {
        var colRightIsVisible = isVisible("pageColRight");
        var num = 0 + colRightIsVisible;
        var currentClass = "col-md-" + (12 - (num * 2));
        var transMicroSec = 1;

        $("#pageColMain").removeClass("col-md-8 col-md-10 col-md-12");
        $("#pageColMain").addClass(currentClass, transMicroSec);


    }

    function isVisible(id, className) {
        var selector = (id != null) ? "#" + id  : "." + className;
        var classes =  $(selector).attr("class");
        var rc = ! $(selector).hasClass("hidden");

        return rc;
    }
});