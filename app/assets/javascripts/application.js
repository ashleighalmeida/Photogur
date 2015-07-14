// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.firefly-0.4
//= require jquery-firefly-0.2
//= require bootstrap
//= require turbolinks
//= require_tree .




function inViewport($el) {
    var H = $(window).height(),
        r = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? H-t : (b<H?b:H));  
}

$(window).on("scroll resize", function(){
  var window_offset = inViewport($('.intro')); 
  $(".overlay").height(window_offset);
  $(".caption").css("bottom", (window_offset / 4) );
});


$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});