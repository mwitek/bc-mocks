var retina = window.devicePixelRatio > 1; //if ration is greater than 1 its retina
if (retina) { // if this is true...
  $('img').each(function() { // get all images and run this code on 'each' image found
  var src = $(this).attr("src"); // save the source on the image

  $(this).attr("src", src.replace(/\./i, "@2x."));
  $("img").error(function () {
    $(this).unbind("error").attr("src", src);
  }); 
});
}
