jQuery(document).ready(function($){'use strict';$('.desktop-search-button').on('click',function(){'use strict';$('.space-header-search-block').addClass('active');setTimeout(function(){'use strict';$('.space-header-search-block input').focus();},500);});$('.desktop-search-close-button').on('click',function(){'use strict';$('.space-header-search-block').removeClass('active');});$('.space-mobile-menu-icon').on('click',function(){'use strict';$('.space-mobile-menu').addClass('active');});$('.space-mobile-menu-close-button').on('click',function(){'use strict';$('.space-mobile-menu').removeClass('active');});$(function(){$('.space-pros-ins').before().click(function(){window.location.replace('whatsapp://send/?phone=917070803850&text=*Hello%20there%2C%20I%20want%20Account*%0A%0A-%20from%20KingOnlineHub.com');});});$('.current-menu-item').on('click',function(){'use strict';$('.space-mobile-menu').removeClass('active');});$(".menu-item-has-children a").on('click',function(event){'use strict';event.stopPropagation();location.href=this.href;});$(".menu-item-has-children").on('click',function(){'use strict';$(this).addClass("toggled");if($(".menu-item-has-children").hasClass("toggled"))
{$(this).children("ul").toggle();}
$(this).toggleClass("space-up");return false;});$('.space-news-8-items').owlCarousel({animateOut:'fadeOut',animateIn:'fadeIn',loop:true,margin:0,nav:true,dots:false,autoHeight:false,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$('.space-news-9-items').owlCarousel({animateOut:'fadeOut',animateIn:'fadeIn',loop:true,margin:0,nav:true,dots:false,autoHeight:true,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});if($('#scrolltop').length){var scrollTrigger=100,backToTop=function(){'use strict';var scrollTop=$(window).scrollTop();if(scrollTop>scrollTrigger){$('#scrolltop').addClass('show');}else{$('#scrolltop').removeClass('show');}};backToTop();$(window).on('scroll',function(){'use strict';backToTop();});$('#scrolltop').on('click',function(e){'use strict';e.preventDefault();$('html,body').animate({scrollTop:0},1000);});}});