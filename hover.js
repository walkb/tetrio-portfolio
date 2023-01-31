$(document).ready(function() {
  $(".button").hover(
    function() {
      // console.log("hover");
      $(this).stop(true, false).animate({ marginLeft: "16vw" });
    },
    function() {
      // console.log("unhover");
      $(this).stop(true, false).animate({ marginLeft: "20vw" });
    }
  )
}
)