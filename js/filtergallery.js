  $(document).ready(function(){
    $(".nav-link").click(function(){
      var filter = $(this).data("filter");
      if (filter == "*") {
        $(".gallery-item").show();
      } else {
        $(".gallery-item").hide();
        $(filter).show();
      }
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  });
