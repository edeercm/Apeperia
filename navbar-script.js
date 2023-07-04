$('.toggler, .nav-content a:not(#dropdown-link)').on('click', function(){
    $('.toggler').toggleClass('change');
    $('.nav-content').slideToggle();
});
  
