$(document).ready(function() {
    setImages();
    $(".cleanCheck").change(function() {
        $('.entry').remove();
        $('.p').attr("style", "").off();
        setImages();
    });
});

function setImages() {
    setImage(".w0a000", "http://k003.kiwi6.com/hotlink/mz4rf4o9it/w0a000.m4a");
    setImage(".w0a001", "http://k003.kiwi6.com/hotlink/q29617xpe2/w0a001.m4a");
    setImage(".w0a002", "http://k003.kiwi6.com/hotlink/lkltm1yzbv/w0a002.m4a");
    setImage(".w1a000","http://k003.kiwi6.com/hotlink/owts6om80z/w1a000.m4a");
    setImage(".w1a001", "http://k003.kiwi6.com/hotlink/wkaqpzl15k/w1a001.m4a");
    setImage(".w1a003", "http://k003.kiwi6.com/hotlink/ri6a0hit5c/w1a003.m4a");
    setImage(".w1a004", "http://k003.kiwi6.com/hotlink/8rktt6ptno/w1a004.m4a");
}

function setImage(image, sound) {
    let thisAudio = new Audio(sound);
    if ($(window).width() < $(window).height())
    // || window.matchMedia("only screen and (max-width: 760px)"))
    {
        $(".clean").css("display", "none");
        $('.imageWrapper').css({"width":"auto","height":"auto"})
        $(image).css({ "width": "100%", "display": "block", "position": "relative","margin-right":"10px" })
        $(image).on("click", function() {
            thisAudio.play();
        }).before(image.substr(1));
        $("body").css({ "overflow": "auto" });
    } else if (document.getElementById("cleanCheck").checked) {
        $('.imageWrapper').css({"width":"auto","height":"auto"})
        $('.imageWrapper').css("display:flex");
        $(image).css({
            transform: "rotate(0deg)",
            "z-index": 100
        });
        $(image).css({ "position": "relative", "width": "33%" }).mouseenter(function() {
            document.title = image.substr(1);
        }).mouseleave(function() { document.title = "theworkofus" });
        $(image).on("click", function() {
            thisAudio.play();
        })
        $("body").css({ "overflow": "auto" });
    } else {
        $(".clean").css("display", "block");
        $("body").css({ "overflow": "hidden" });
        $(image)
            .css({
                width: Math.floor(Math.random() * 500),
                transform: "rotate(" + Math.floor(Math.random() * 310) + "deg)",
                left: Math.floor(Math.random() * 90) + "vw",
                top: Math.floor(Math.random() * 90) + "vh"
            })
            .mouseenter(function() {
                $(".data").text(image.substr(1));
                thisAudio.play();
                $(image).css({
                    width: "30vw",
                    transform: "rotate(0deg)",
                    "z-index": 100
                });
            })
            .on("mouseleave", function() {
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