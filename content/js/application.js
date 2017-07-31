var app = app || {};

app.headerInit = function() {
    var toggleNavBars = function() {
	  $('ul.toggle').slideToggle(600);
    };
    var fixHeaderOnScroll = function() {
            if ($(window).scrollTop() > 0) {
              $('#header_outer').addClass('fixed');
            }
            else {
              $('#header_outer').removeClass('fixed');
            }
    };
    var mainNavToggle = function() {
          $('.main-nav').slideToggle();
          return false;    
    };
    var headerNavAnimate = function() {
	$(".nav a").bind('click', function(e) {
	    var $anchor = $(this);
	    $('html, body')
		.stop()
		.animate({
		    scrollTop: $($anchor.attr('href')).offset().top - 91
		}, 1500, 'easeInOutExpo');
	    e.preventDefault();
	});
    };
    
    $('#header_outer').scrollToFixed();
    
    $('.res-nav_click').click(toggleNavBars);
    $('.res-nav_click').click(mainNavToggle);
    $(window).bind('scroll', fixHeaderOnScroll);
    $(window).load(headerNavAnimate);
};

app.init = function() {
    app.headerInit();
};

app.wow = (function() {
     var wow = new WOW(
      {
      animateClass: 'animated',
	  offset:       100
      }
      );
    wow.init();
    return wow;
})();
