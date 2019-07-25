var winWidth = $(window).width()
$(function(){

	$(".navMenu").click(function(){
		$(".main-header .rightMenu").addClass("active")
	});
	$(".closeButton").click(function(){
		$(".main-header .rightMenu").removeClass("active")
	});

	$('.main-header .rightMenu li').click(function(){
		$(this).find('.dropdown').slideToggle();
		$(this).siblings().find('.dropdown').slideUp();
	});

 //Accordion
//$(".accordionContent:gt(0)").hide();
$(".accordionSection h2").click(function(){
  if ($(this).hasClass('active')==true){
  $(".accordionSection h2").removeClass('active');
  $(this).next().slideUp();
  return false; 
    }
  $(".accordionContent").slideUp();
  $(".accordionSection h2").removeClass('active');
  $(this).addClass('active');
  $(this).next().slideDown();
    })
  
      
      

$(document).ready(function(){
  var $firststatus = $('.firstcount');
  var $laststatus = $('.lastcount');

  var $status = $('.pagingInfo');
  var time = 2;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
 
  $slick = $('.slider');

	$slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $firststatus.text(i);	    
	    //$status.text(i + '/' + slick.slideCount);
	    $laststatus.text(slick.slideCount);
	});

  $slick.slick({
    slidesToShow: 3,
    draggable: true,
    adaptiveHeight: false,
    dots: false,
    mobileFirst: true,
    pauseOnDotsHover: true,
     responsive: [
     {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        arrows: true,
        
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        arrows: true,
        
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
        
      }
    }
  ]
  });
  
  $bar = $('.slider-progress .progress');
  
  $('.slider-wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 20);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  
});






$(document).ready(function(){
  var $firststatus = $('.firstcount1');
  var $laststatus = $('.lastcount1');

  var $status = $('.pagingInfo');
  var time = 2;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
 
  $slick = $('.Videoslider');

  $slick.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $firststatus.text(i);     
      //$status.text(i + '/' + slick.slideCount);
      $laststatus.text(slick.slideCount);
  });

  $slick.slick({
    slidesToShow: 1,
    draggable: true,
    adaptiveHeight: false,
    dots: false,
    mobileFirst: true,
    pauseOnDotsHover: true,
     responsive: [
     {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        arrows: true,
        
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        arrows: true,
        centerMode:false,
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
        
      }
    }
  ]
  });
  
  $bar = $('.slider-progress .progress');
  
  $('.slider-wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 20);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  
});






$('.center').slick({
  slidesToShow: 1,
  infinite: true,
  dots:true,
  // responsive: [
  //   {
  //     breakpoint: 1440,
  //     settings: {
  //       arrows: true,
  //       centerMode: true,
  //       slidesToShow: 1
  //     }
  //   },
  //   {
  //     breakpoint: 1025,
  //     settings: {
  //       arrows: true,
  //       slidesToShow: 2
  //     }
  //   },
  //   {
  //     breakpoint: 769,
  //     settings: {
  //       arrows: true,
  //       slidesToShow: 1
  //     }
  //   },
  //   {
  //     breakpoint: 567,
  //     settings: {
  //       arrows: true,
  //       centerMode:false,
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});

$('.productSection').slick({
  slidesToShow: 4,
  infinite: true,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 567,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
    // {
    //   breakpoint: 1025,
    //   settings: {
    //     arrows: true,
    //     slidesToShow: 2
    //   }
    // },
    // {
    //   breakpoint: 769,
    //   settings: {
    //     arrows: true,
    //     slidesToShow: 1
    //   }
    // },
    // {
    //   breakpoint: 567,
    //   settings: {
    //     arrows: true,
    //     centerMode:false,
    //     slidesToShow: 1
    //   }
    // }
  ]
});




$('.certificateSection').slick({
  slidesToShow: 1,
  arrows:true,
  infinite: true,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 567,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});





$('.videoSliderSection').slick({
  slidesToShow: 1,
  arrows:true,
  infinite: true,
  autoplay:true,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 567,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


$('.productSliderSection').slick({
  slidesToShow: 1,
  arrows:true,
  infinite: true,
  autoplay:true,
  dots:true,
  //   responsive: [
  //   {
  //     breakpoint: 1100,
  //     settings: {
  //       arrows: true,
  //       slidesToShow: 1
  //     }
  //   },
  //   {
  //     breakpoint: 769,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       slidesToShow: 1
  //     }
  //   },
  //   {
  //     breakpoint: 567,
  //     settings: {
  //       arrows: false,
  //       centerMode: true,
  //       slidesToShow: 1
  //     }
  //   }
  // ]
});

// $('.consumerArticle').slick({
//   slidesToShow: 3,
//   infinite: true,
//   centerPadding: '40px',
//   centerMode:true,
//   arrow:true,
  
// });
  AOS.init();


  $(window).load(function(){
  	$("body").css("opacity", "1")
  	$("body").css("transition", "0.6s")
  })


})