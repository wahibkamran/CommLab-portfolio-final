$(document).ready(function () {
    var options = {
        mode: "vp", // "vp", "set"
        autoHash: false,
        sectionScroll: true,
        initialScroll: false,
        keepHistory: false,
        sectionWrapperSelector: ".section-wrapper",
        sectionClass: "section",
        animationSpeed: 500,
        headerHash: "header",
        breakpoint: null,
        eventEmitter: null,
        dynamicHeight: true
    };

    $.smartscroll(options);
});

$(function(){

  $("#30mff").on({
   mouseenter: function(){
    $(this).attr('src','gifs/30mff.gif');
  },

  mouseleave: function(){
  	$(this).attr('src','images/1.png');
  }

  });
  
  $("#comix").on({
   mouseenter: function(){
    $(this).attr('src','gifs/comix.gif');
  },

  mouseleave: function(){
  	$(this).attr('src','images/2.png');
  }

  });  

  $("#audio").on({
   mouseenter: function(){
    $(this).attr('src','gifs/audio.gif');
  },

  mouseleave: function(){
  	$(this).attr('src','images/3.png');
  }

  });

  $("#video").on({
   mouseenter: function(){
    $(this).attr('src','gifs/video.gif');
  },

  mouseleave: function(){
  	$(this).attr('src','images/4.png');
  }

  });
});

$(function() {
  $.scrollify({
    section : ".example",
  });
});