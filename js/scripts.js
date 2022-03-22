$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
    $("intro").addClass("light");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
    $("intro").addClass("dark");
  });
  });
});
