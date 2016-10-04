$(document).ready(function(){
  
  $(".toggle").click(function(){
    $(".menuSlideBar").slideToggle(800);
  });

  $(".scam").click(function(){
    $(".carlton,.vacation").toggle();
  });

  $("#usefulLinks").click(function(){
    $(".hide").toggle();
  });

});
