function setImage(image, url) {
    document.getElementById('image-box').src = image;
    document.getElementById('image-box').style.border = "2px solid #2f3436";
    document.getElementById('image-box').style.boxShadow = "5px 5px 5px black";
    document.getElementById('image-a-tag').href = url;
}