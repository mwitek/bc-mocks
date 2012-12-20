function LogoRotatorInit(imageClass,imagePaths){
  var brandLogoSelector = [],
        brandLogoImages = imagePaths;

  $(imageClass).each(function(){
    brandLogoSelector.push(this);
  });


  $('body').append('<div id="image_cache" />');

  var imageCache = $('#image_cache');

  $('#image_cache').css('display','none');
  for(i=0; i<brandLogoImages.length;i++){
     imageCache.append('<img src='+brandLogoImages[i] +' />')
  }

  brandLogoImagesCopy = brandLogoImages.slice();
    
  $.each(brandLogoSelector, function(index, value) {      
    var $image  = $(value),
    randomValue = Math.floor(Math.random() * brandLogoImagesCopy.length);
    $image.wrap('<div class="'+imageClass.replace(/\./g,' ').trim()+'_'+(index+1)+' random_image_wrap" />');
    $image.attr('src', brandLogoImagesCopy[randomValue]);
    brandLogoImagesCopy.splice(randomValue,1);
  });

  function randomLogoChange(){
    var random = Math.floor(Math.random() * brandLogoSelector.length),
    $logo = $(brandLogoSelector[random]),
    originalOpacity = $logo.css('opacity');
    var allImages = $(imageClass);
    var logoFound = false;
    
    function replaceImage(){
      var randomImage = brandLogoImages[Math.floor(Math.random() * brandLogoImages.length)];
      logoFound = false
      $.each(allImages,function(value,index){
        if($(this).attr('src') == randomImage){
          logoFound = true
        }
      });
     if(!logoFound){
      $logo.parent().animate({opacity: 0.0}, 500, function() {
        $(this).children('img').attr('src',randomImage);
        $(this).animate({opacity:originalOpacity},500, function(){
          if($(this).css('opacity') != 1){
            $(this).css('opacity',1);
        }
        });
      });
       

    }else{
      replaceImage();
    }
    }replaceImage();  
  }

  window.setInterval(function(){
    randomLogoChange();
  }, 2800);

}