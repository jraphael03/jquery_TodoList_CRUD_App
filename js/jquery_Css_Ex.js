// Strike through functionality using css in jquery
$("li").click(function () {
  //console.log("Listener has been set up")   // Log whenever an li is clicked

  // If text is green turn it black
  //console.log($(this).css("color"))   // Shows how color is being passed to the webpage

  if ($(this).css("color") == "rgb(0, 128, 0)") {
    // This points at the element(s)/item(s) selected, need to use rgb because that is how it is being read

    $(this).css({
      color: "black",
      textDecoration: "none",
    });
  } else {
    $(this).css({
      color: "green",
      textDecoration: "line-through",
    });
  }
});


