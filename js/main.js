// jQuery Code
$( document ).ready(function() {
    $( "#body-content" ).load( "pages/home.html", function() {
    });
    $("#nav-items li").click(function() {
      // Nav item name
      var nav_item = $(this)

      // Use nav item name to chose which page to load
      var nav_item_name = $(this).text().toLowerCase().trim();
      var page_to_load = nav_item_name + ".html";
      console.log(page_to_load);
      $( "#body-content" ).load( "pages/" + page_to_load, function() {
      });
      
      // Clear active nav item
      $("#nav-items li").removeClass("active")
      // Set nav item as active
      nav_item.addClass("active")
    });
});
