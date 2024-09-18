$(document).ready(function(){
  
  //mob menu
  $('#js-mob-menu-btn').on('click', function(){
    $(this).toggleClass('open');
    $('body').toggleClass('no-scroll');
    $('#js-mob-menu').toggleClass('open');
  })
  
  //scroll
  $('.js-scroll').click(function(e){
    e.preventDefault();
    
    $('#js-mob-menu-btn').removeClass('open');
    $('#js-mob-menu').removeClass('open');
    $('body').removeClass('no-scroll');
    
    let anchor = $(this).attr("href"),
        scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 100}, 250); 
    }
  });
  
  //types
  $('.js-type-item-open').click(function(){
    $(this).toggleClass('open').closest('.js-type-item').toggleClass('open').find('.js-type-item-hide').slideToggle(250);
  });
  $('.js-type-item-more').click(function(){
    $(this).closest('.js-type-item').toggleClass('more');
  });
  
  //seo
  $('#js-seo-more').on('click', function(){
    $(this).remove();
    $('#js-seo-container').addClass('open');
  })
  
  //validation
  $('.js-form-val').on('submit', function(e){
    e.preventDefault();
    var form = $(this),
        fields = $(form).find('.js-val'),            
        valid = true;

    $.each($(fields), function(){
      if (!$.trim($(this).val())){
        $(this).addClass('error');
        valid = false;            
      } else {
        $(this).removeClass('error');
      }
    });

    if (valid){
     $.ajax({
          url: "php/mail.php",
          type: "POST",
          response: "HTML",
          data: $(this).serialize(),    
          success: function(data) {
            $('.popup.open').removeClass('open');                  
            $('#js-confirm').addClass('open');                  
          },
          error: function() {
            console.log("Не возможно отправить");
          }
      });
    }
  });
  $('.js-val').on('keypress', function(){
    $(this).removeClass('error');
  });
  
  //team
  $('.js-team-item').on('click', function(){
    $(this).addClass('open').siblings().removeClass('open');
  })  
  
  //Загрузить файл
  $('.js-attach-form-val').on('submit', function(e){
    e.preventDefault();
    var form = $(this),
        fields = $(form).find('.js-attach-val'),            
        valid = true;

    $.each($(fields), function(){
      if (!$.trim($(this).val())){
        $(this).addClass('error');
        valid = false;            
      } else {
        $(this).removeClass('error');
      }
    });

    if (valid){
     $.ajax({
          url: "php/attach.php",
          type: "POST",
          response: "HTML",
          data: $(this).serialize(),    
          success: function(data) {
            $('.popup.open').removeClass('open');                  
            $('#js-confirm').addClass('open');                  
          },
          error: function() {
            console.log("Не возможно отправить");
          }
      });
    }
  });
  $('.js-attach-val').on('keypress', function(){
    $(this).removeClass('error');
  });
  var fileName = '';
  $('#js-upload').on('change', function(e){
      var $this = $(this);        
      if($this.files && $this.files.length > 1){
          fileName = ($this.getAttribute('data-multiple-caption') || '' ).replace('{count}', $this.files.length);
      } else{
          fileName = e.target.value.split('\\').pop();            
      }
      if(fileName){
          $('.js-file-name').html(fileName);
          $('#js-file-name').addClass('open');
      } else{
          $('.js-file-name').html('');
          $('#js-file-name').removeClass('open');
      }                    
  });
  $('#js-file-del').on('click', function(){
      $('#js-file-name').removeClass('open');
      $('#js-upload').val('');
  });
  
  //tab
  $('.js-tab-item').not(':first-child').hide();
  $('.js-tab').click(function() {
    if(!$(this).hasClass('active')){
      let tabsContainer = $(this).closest('.js-tab-container'),
          tabs = tabsContainer.find('.js-tab'),
          tabsItems = tabsContainer.find('.js-tab-item');                
      tabs.removeClass('active').eq($(this).index()).addClass('active');

      tabsItems.hide().eq($(this).index()).fadeIn()
    }
  }).eq(0).addClass('active');
  
  // ===== Slider Gallery Works =====
  $('.gallery-works-slider.owl-carousel').owlCarousel({
    stagePadding: 10,
    items: 4,
    nav: true,
    margin: 12,
    dots: true,
    responsiveClass:true,
    responsive:{
      1280:{
        items:4
      },
      760:{
        items:3
      },
      480:{
        items:2
      },
      340:{
        items:1
      }
        
    }
  });

  //service item

  // Старый код для открывания услуг
  // $('.js-service-item-btn').on('click', function(){
  //   $(this).toggleClass('open').closest('.js-service-item').find('.js-service-item-hide ul').slideToggle(300);
  // })

  $('.js-service-item-btn').on('click', function(){
    $('.js-service-item-btn.open').not(this).each(function() {
      $(this).removeClass('open').closest('.js-service-item').find('.js-service-item-hide ul').slideUp(300);
    });

    $(this).toggleClass('open').closest('.js-service-item').find('.js-service-item-hide ul').slideToggle(300);
  });
  
  //close popup
  $('.js-popup-close').on('click', function(){
    $('body').removeClass('no-scroll');
    $('.popup.open').removeClass('open');
  }) 
  
  //order call form
  $('.js-order-btn').on('click', function(){
    $('body').addClass('no-scroll');
    $('#js-popup-order').addClass('open');
  })
  $('.js-consultation-btn').on('click', function(){
    $('body').addClass('no-scroll');
    $('#js-popup-consultation').addClass('open');
  })
  $('.js-project-btn').on('click', function(){
    $('body').addClass('no-scroll');
    $('#js-popup-project').addClass('open');
  })

  document.querySelector('.cookies__btn').addEventListener('click', () => {
    document.querySelector('.cookies').style.display = 'none'
  })


  // Маска на ввод телефона
  const elements = document.querySelectorAll('.mask-phone'); 
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  elements.forEach(element => {
    IMask(element, maskOptions);
  });
  
  
  //service item
  
  /*
  //order calc form
  $('.js-calc-btn').on('click', function(){
    $('body').addClass('no-scroll');
    $('#js-popup-calc').addClass('open');
  })
  
  //order calc form
  $('.js-order-btn').on('click', function(){
    $('body').addClass('no-scroll');
    $('#js-popup-order').addClass('open');
  })
  
  //order calc form
  $('.js-consultation-btn').on('click', function(){
    $('body').addClass('no-scroll');
    $('#js-popup-consultation').addClass('open');
  })
  

   
  
  
  
  */
});
