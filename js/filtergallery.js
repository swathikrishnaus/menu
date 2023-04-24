  $(document).ready(function(){
    $(".btn").click(function(){
      var filter = $(this).data("filter");
      if (filter == "*") {
        $(".gallery-item").show();
      } else {
        $(".gallery-item").hide();
        $(filter).show();
      }
      $(".btn").removeClass("active");
      $(this).addClass("active");
    });
  });
