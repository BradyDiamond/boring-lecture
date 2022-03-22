$(document).ready(function() {
  $("button.light").click(function() {
    $("p").removeClass();
    $("p").addClass("light");
  });

  $("button.dark").click(function() {
    $("p").removeClass();
    $("p").addClass("dark");
  });

  $("p.light").click(function() {
    $("p").removeClass();
    $("p").addClass("light");
  });

  $("p.dark").click(function() {
    $("p").removeClass();
    $("p").addClass("dark");
  });
});  
