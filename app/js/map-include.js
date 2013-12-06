  $(document).ready(function() {
    // Google Maps https://maps.google.com/maps?ll=51.51347,-0.112095&spn=0.018001,0.036821&t=m&cid=0xff65199fcaccc9d2&z=15&iwloc=lyrftr:m,18268008090573032223,51.513603,-0.108662
   $('.map-canvas').gmap({'scrollwheel': false, 'disableDefaultUI':true, 'center': '51.513603,-0.108662', 'zoom': 12}).bind('init', function(ev, map) {
  });   
 });

