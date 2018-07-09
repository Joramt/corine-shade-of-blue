window.onload = function(){
  var images = document.getElementsByClassName('_1ift img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/blue-heart.png"

}
}


document.addEventListener("DOMSubtreeModified", function() {
  var images = document.getElementsByClassName('_1ift img');
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/blue-heart.png"
}}, false);
