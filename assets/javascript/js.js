$(document).ready(function () {

    var height = $(window).height();
    var heightb = height + 50;
    var width = $(window).width();


    function projectList() {
        var num = 4;
        var multiple = (1 / num) * 100;
        for (i = 0; i < num; i++) {
            $("#" + i).attr("style", "position: absolute; top: " + (i * multiple) + "%;");
        }
    }

    function showMore(id) {
        var color = "none";
        if (id == 0) {
            var color = "#df7171";
        };
        if (id == 1) {
            var color = "#b2ffb9";
        };
        if (id == 2) {
            var color = "#c6deff";
        };
        if (id == 3) {
            var color = "#c167d8";
        };
        
        $("#0" + id).attr("style", "background-color: " + color + ";")

    }




    $(".section").attr("style", "height: " + heightb + "px; width: " + width + "px;");
    
    $("body").attr("style", "display: block;");

    $(window).on("resize", function () {
        height = $(window).innerHeight();
        heightb = height + 50;
        width = $(window).innerWidth();
        console.log(width, 500); 
        $(".section").attr("style", "height: " + heightb + "px; width: " + width + "px;");
    });
    if(width > 600) {
        projectList();
        $(".project").mouseover(function (event) {
            console.log(event.target.id);
            // var id = event.target.id
            showMore(event.target.id);
        });
        $(".project").mouseout(function (event) {
            console.log(event.target.id);
            // var id = event.target.id
            $("#0" + event.target.id).attr("style"," ");
        });
    
    }



});