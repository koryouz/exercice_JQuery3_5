$(document).ready(function(){
  $(document).bind('keydown', function(kD){
    var box = $(".square"),
        left = 37,
        up = 38,
        right = 39,
        down = 40;
        posX = $('.square').offset().left;
        posY = $('.square').offset().top;
        // TP at border screen if(pos)
        if (posX > 1860){
          box.animate({left: "-=2000"},10);
        }
        if (posX < -290){
          box.animate({left: "-=-2000"},10);
        }
        if (posY > 760){
          box.animate({top: "-=900"},10);
        }
        if (posY < -100){
          box.animate({top: "-=-900"},10);
        }
        //DEPLACEMENTS
        if (kD.keyCode == left) {
          box.animate({left: "-=50"},10);
        }
        if (kD.keyCode == up) {
          box.animate({top: "-=50"},10);
        }
        if (kD.keyCode == right) {
          box.animate({left:"+=50"},10);
        }
        if (kD.keyCode == down) {
          box.animate({top: "+=50"},10);
        }
  });
});
