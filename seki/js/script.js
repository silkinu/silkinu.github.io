$(function(){
  $(".img-box img").click(function(){
    $("#frontPanel").fadeIn(1500);
    var val = $(this).attr("src");
    $("#frontPanel img").attr("src",val);
  });
  $(".close").click(function(){
    $("#frontPanel").fadeOut();
  });
});