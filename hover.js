$(document).ready(function() {

  $(".button").hover(
    function() {
      const audio = new Audio('hovernoise.mp3');
      audio.play();
      $(this).stop(true, false).animate({ marginLeft: "16vw" }, 200);
    },
    function() {
      // console.log("unhover");
      $(this).stop(true, false).animate({ marginLeft: "20vw" });
    }
  )

  $(".profilesection").hover(
    function() {
      const audio = new Audio('hovernoise.mp3');
      audio.play();
      $(this).stop(true, false).animate({ marginTop: "5px" }, 200);
    },
    function() {
      // console.log("unhover");
      $(this).stop(true, false).animate({ marginTop: "0px" });
    }
  )
}
)