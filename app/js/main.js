
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
  $("#content").waypoint(function(){
    $(".subnav").toggleClass('show');
  });



// $.jribbble.getShotsByPlayerId('sananes', function (playerShots) {
//     var html = [];
//     var projects = $('#projects');
//     $.each(playerShots.shots, function (i, shot) {
//         html.push('<li class="large-4 columns">');
//         //html.push('<h3>' + shot.title + '</h3><h4>by ' + shot.player.name + '</h4>');
//         html.push('<a href="' + shot.url + '"><img src="' + shot.image_url + '" ');
//         html.push('alt="' + shot.title + '"><span class="overlay"><span class="title">' + shot.title + '</span></span></a></li>');
//     });

//     projects.html(html.join(''));
// }, {page: 1, per_page: 12});

// $(".projects").on('mouseenter','li', function () {
//     $(this).find('.overlay').addClass('active');
// });
// $(".projects").on('mouseleave','li',function () {
//     $(this).find('.overlay').removeClass('active');
// });
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
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });
});