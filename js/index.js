$(document).ready(function () {
  setImages();
  $(".cleanCheck").change(function() {
    $('.entry').remove();
    $('.p').attr("style","").off();
    setImages();
  });
});

function setImages() {
  setImage(".w1a000", "http://k003.kiwi6.com/hotlink/2wgaui3q9b/IMG_2168.mp3");
  setImage(".w1a002", "http://k003.kiwi6.com/hotlink/lnfw0n0xuv/Trueaudio.mp3");
  setImage(".w1a001", "http://k003.kiwi6.com/hotlink/cmngfubqa7/vidw1a001.mp3");
  setImage(".w2a000", "http://k003.kiwi6.com/hotlink/xa4le6zyyw/w2a000.mp3");
  setImage('.w2a003', "");
  setImage(".w2a001","");
  setImage(".w2a002","")
  setImage(".w3a000","http://k003.kiwi6.com/hotlink/o8yygegbtg/IMG_2195.mp3")
  setImage(".w4a000","http://k003.kiwi6.com/hotlink/acx55wsq3d/IMG_2226.mp3")
  setImage(".w5a000","");
  setImage(".w4a002","");
}

function setImage(image, sound) {
  let thisAudio = new Audio(sound);
  if ($(window).width() < $(window).height())
  // || window.matchMedia("only screen and (max-width: 760px)"))
  {
    $(image).css({ "width": "100%", "display": "block", "position": "relative" })
    $(image).on("click", function () {
      thisAudio.play();
    }).before(image.substr(1));
    $("body").css({ "overflow": "auto" });
  } else if(document.getElementById("cleanCheck").checked) {
    $('.imageWrapper').css("display:flex");
    $(image).css({
      transform: "rotate(0deg)",
      "z-index": 100
    });
    $(image).css({ "position":"relative","width":"33%" }).mouseenter(function () {
     document.title = image.substr(1);
    }).mouseleave(function(){document.title = "theworkofus"});
    $(image).on("click", function () {
      thisAudio.play();
    })
    $("body").css({ "overflow": "auto" });
  } else {
    $("body").css({ "overflow": "hidden" });
    $(image)
      .css({
        width: Math.floor(Math.random() * 500),
        transform: "rotate(" + Math.floor(Math.random() * 310) + "deg)",
        left: Math.floor(Math.random() * 90) + "vw",
        top: Math.floor(Math.random() * 90) + "vh"
      })
      .mouseenter(function () {
        $(".data").text(image.substr(1));
        thisAudio.play();
        $(image).css({
          width: "30vw",
          transform: "rotate(0deg)",
          "z-index": 100
        });
      })
      .on("mouseleave", function () {
        $(".data").empty();
        thisAudio.pause();
        $(image).css({
          width: Math.floor(Math.random() * 500),
          transform: "rotate(" + Math.floor(Math.random() * 310) + "deg)",
          left: Math.floor(Math.random() * 90) + "vw",
          top: Math.floor(Math.random() * 90) + "vh",
          "z-index": 0
        });
      });
  }
}