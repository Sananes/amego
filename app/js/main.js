
$(document).foundation({
  reveal: {
    close_on_background_click: false
  },
  magellan: {
    settings: {
      threshold: 0
    }
  }
});

 $(document).ready(function () {

$('#stickybar').stickychimp();

  // Dribbble
  $(".projects li").each( function() {
      $(this).hover(function () {
        $(this).find('.overlay').toggleClass('active');
       })
  });

  // Custom Variables
  var quoteButton = $('.button.quote'),
      contactForm = $('#contact-form');
      submitButton = contactForm.find('.button');

  quoteButton.on('click', function() {
    var $this = $(this);
    $this.addClass('active');
  });

  contactForm.bind('close', function() {
    quoteButton.removeClass('active');
  });
  contactForm.find('form')
  .bind('valid', function () {
    submitButton.text("Submitting, please wait...");
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});