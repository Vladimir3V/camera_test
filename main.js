(function() {
  video = document.getElementById("vid");
  console.log(video);
  video.style.width = document.width + "px";
  video.style.height = document.height + "px";
  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.setAttribute("playsinline", "");

  var constraints = {
    audio: false,
    video: {
      facingMode: "user"
    }
  };

  console.log(11111);

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function success(stream) {
      video.srcObject = stream;
    });
})();
