(function() {
  video = document.getElementById("vid");
  console.log(video);
  video.style.width = document.width + "px";
  video.style.height = document.height + "px";
  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");

  if (navigator.getUserMedia) {
    navigator.getUserMedia(
      { audio: false, video: { facingMode: "user" } },
      function(stream) {
        localStream = stream;
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
          video.play();
          video.onplay = function() {
            showVideo();
          };
        };
      },
      function(err) {
        displayErrorMessage(
          "There was an error with accessing the camera stream: " +
            err.name +
            ". You may upload files either manually or try to use another browser.",
          err
        );
        console.log("The following error occurred: " + err.name);
      }
    );
  } else {
    displayErrorMessage(
      "Your browser doesn't support the navigator.getUserMedia interface. Try to use another browser or Lykke Wallet App."
    );
  }
})();
