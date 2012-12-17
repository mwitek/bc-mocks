function LogoRotatorInit(){
  var brandLogoSelector = ['brand_logo_1','brand_logo_2','brand_logo_3','brand_logo_4','brand_logo_5'],
        brandLogoImages = ['stylesheets/assets/bursty-logos/brand-logos/boots-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/brit-gas-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/britsh-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/carphone-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/domino-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/gap-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/goldsmith-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/hilton-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/rac-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/shell-logo.png',
                          'stylesheets/assets/bursty-logos/brand-logos/virgin-logo.png'];

  $('body').append('<div id="image_cache" />');

  var imageCache = $('#image_cache');

  $('#image_cache').css('display','none');
  for(i=0; i<brandLogoImages.length;i++){
     imageCache.append('<img src='+brandLogoImages[i] +' />')
  }

  brandLogoImagesCopy = brandLogoImages.slice();
    
  $.each(brandLogoSelector, function(index, value) {       
    var $image  = $('#'+value),
    randomValue = Math.floor(Math.random() * brandLogoImagesCopy.length);

    $image.wrap('<div class="brand_logo_'+(index+1)+'" />');
    $image.attr('src', brandLogoImagesCopy[randomValue]);
    brandLogoImagesCopy.splice(randomValue,1);
  });

  function randomLogoChange(){
    var random = Math.floor(Math.random() * brandLogoSelector.length),
    $logo = $('.'+brandLogoSelector[random]),
    originalOpacity = $logo.css('opacity');
    var allImages = $('.bursty-logos').children('div').children();
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
      $logo.animate({opacity: 0.0}, 1000, function() {
        $(this).children('img').attr('src',randomImage);
        $(this).animate({opacity:originalOpacity},1000)
      });
    }else{
      replaceImage();
    }
    }replaceImage()
    
  
  }

  // window.setInterval(function(){
  //   randomLogoChange();
  // }, 2200);

}
LogoRotatorInit();