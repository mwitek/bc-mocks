      var password;

      var pass1="lookleft";

      password=prompt('Please enter your password to view the page',' ');

      if (password==pass1){
        jQuery(document).ready(function(){
        	$('.consumer').load('index-home.html');
        });
      }else{
        window.location="fail.html";
      }