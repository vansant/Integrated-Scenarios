// jQuery Code
$(document).ready(function() {
    // Load home page initially
    $("#body-content").load("pages/home.html", function() {});


    // On click of nav-bar items
    $("#nav-items li ").click(function() {
        // Nav item name
        var nav_item = $(this);

        // Clear active nav item
        $("#nav-items li").removeClass("active")
            // Set nav item as active
        nav_item.addClass("active")


        // If a dropdown nav-item
        if($(nav_item).find('ul').length){
            // do not immediately load the page
            nav_item.removeClass("active")
        } else {
        // Load the page corresponding to the nav item name
        var nav_item_name = $(this).text().toLowerCase().trim().split(' ').join('_');
        var page_to_load = nav_item_name + ".html";
        console.log(page_to_load);
        $("#body-content").load("pages/" + page_to_load, function() {});



        // If nav-bar items are collapsed - small screens
        if ($(window).width() < 768) {
          try {
            $(".navbar-toggle").click()
          } catch (error) {
            console.log("error: ", error.message);
          }
        }

        }

    });
});