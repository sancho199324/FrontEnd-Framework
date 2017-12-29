// ЕСЛИ ПРОЕКТ РЕСПОНСИВ ТО ВСЕ ЧТО ВЫШЕ НУЖНО РАССКОМЕНТИРОВАТЬ. СКРИПТ ВЫШЕ ПРЕДНАЗНАЧЕН ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ВЕРСТКИ ПРИ СМЕНЕ ОРИЕНТАЦИИ НА ДЕВАЙСАХ СТАРТ
		
		// $(function(){
		// 	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
		// 	ua = navigator.userAgent,

		// 	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

		// 	scaleFix = function () {
		// 		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
		// 			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
		// 			document.addEventListener("gesturestart", gestureStart, false);
		// 		}
		// 	};
			
		// 	scaleFix();
		// });
		// var ua=navigator.userAgent.toLocaleLowerCase(),
		//  regV = /ipod|ipad|iphone/gi,
		//  result = ua.match(regV),
		//  userScale="";
		// if(!result){
		//  userScale=",user-scalable=0"
		// }
		// document.write('<meta name="viewport" id="myViewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

		// ============================================================
		//  window.onload = function () {
		// 	if(screen.width <= 617) {
		// 	    var mvp = document.getElementById('myViewport');
		// 	    mvp.setAttribute('content','width=617');
		// 	}
		// }
		// ============================================================

// ЕСЛИ ПРОЕКТ РЕСПОНСИВ ТО ВСЕ ЧТО ВЫШЕ НУЖНО РАССКОМЕНТИРОВАТЬ. СКРИПТ ВЫШЕ ПРЕДНАЗНАЧЕН ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ВЕРСТКИ ПРИ СМЕНЕ ОРИЕНТАЦИИ НА ДЕВАЙСАХ КОНЕЦ




//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins START  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================*/





		var sticky = $(".sticky"),
			tabs = $('.tabs'),
			maxhheight = $("[data-mh]"),
			validate   = $('.validate'),
			mask	   = $('input[type="tel"]'),
		    styler = $(".styler"),
		    owl = $(".owl-carousel"),
		    flex = $(".flexslider"),
		    royalslider = $(".royalslider"),
		    tooltip    = $('.tooltip_btn'),
			wow = $(".wow"),
			popup = $("[data-popup]"),
			map 	  	= $('.gmap'),
			mapYa		=$('.ymap'),
			windowW = $(window).width(),
			windowH = $(window).height();


			// if(sticky.length){
			// 		include("plugins/sticky.js");
			// 		include("plugins/jquery.smoothscroll.js");
			// }
			// if(maxhheight.length){
			// 		include("plugins/jquery.matchHeight-min.js");
			// }
			// if(styler.length){
			// 		include("plugins/formstyler/formstyler.js");
			// }
			// if(royalslider.length){
			// 		include("plugins/royalslider/jquery.royalslider.min.js");
			// }
			// if(tabs.length){
			// 		include("plugins/easy-responsive-tabs/easyResponsiveTabs.js");
			// }
			// if(wow.length){
			// 		include("plugins/animation/wow.min.js");
			// }
			// if(popup.length){
			// 		include("plugins/arcticmodal/jquery.arcticmodal.js");
			// }
			// if(flex.length){
			// 		include('plugins/flexslider/jquery.flexslider.js');
			// }
			// if(owl.length){
			// 		include('plugins/owl-carousel/owl.carousel.js');
			// }
			// if(validate.length){
			// 		include("plugins/jquery.validate/jquery.validate.min.js");
			// }
			// if(tooltip.length){
			// 		include("plugins/tooltip/jBox.js");
			// }
			// if(mask.length){
			// 		include("plugins/inputmask/inputmask.js");
			// 		include("plugins/inputmask/inputmask.phone.extensions.js");
			// 		include("plugins/inputmask/jquery.inputmask.js");
			// }
			// if(map.length){
			// 		include("http://maps.google.com/maps/api/js?key=AIzaSyAzO7tz4DCEFuR7psMxgivAypx3LcLUFfo");
			// 		include("plugins/map/maplace-0.1.3.min.js");
			// }
			// if(mapYa.length){
			// 		include("https://api-maps.yandex.ru/2.1/?lang=ru_RU");
			// }

			// 		include("plugins/modernizr.js");



			function include(url){ 

					document.write('<script src="'+ url + '"></script>'); 

			}

		


		$(document).ready(function(){




			/* ------------------------------------------------
			STICKY START
			------------------------------------------------ */

					if (sticky.length){
						$(sticky).sticky({
					        topspacing: 0,
					        styler: 'is-sticky',
					        animduration: 0,
					        unlockwidth: false,
					        screenlimit: false,
					        sticktype: 'alonemenu'
						});
					};

			/* ------------------------------------------------
			STICKY END
			------------------------------------------------ */




			/* ------------------------------------------------
			Inputmask START
			------------------------------------------------ */

			if(mask.length){

				mask.inputmask({
					"mask": "+7 (999) 999-9999",
					'showMaskOnHover': false,
					"clearIncomplete": true,
					'oncomplete': function(){ 
						// console.log('Ввод завершен'); 
					}, 
					'onincomplete': function(){ 
						// console.log('Заполнено не до конца'); 
					},
					'oncleared': function(){ 
						// console.log('Очищено'); 
					}
				});

			}

			/* ------------------------------------------------
			Inputmask END
			------------------------------------------------ */




			/* ------------------------------------------------
			Validate START
			------------------------------------------------ */

			if(validate.length){

				validate.validate({

					rules:{

						cf_name: {
							required: true,
							minlength: 2
						},

						cf_email: {
							required: true,
							email: true
						},

						cf_tel: {
							required: true
						},

					},

					messages:{

						cf_name: {
							required: "Поле обязательно для заполнения",
							minlength: 'Введите не менее 2 символов.'
						},

						cf_email: {
							required: "Поле обязательно для заполнения",
							email: "Не верный email."
						},

						cf_tel: {
							required: "Поле обязательно для заполнения",
							inlength: "Введите не менее 10 символов."
						},

					}

				});	

				// <form class="validate">
    //                 <input type="text" class="form_input" name="cf_name"> 
    //                 <input type="text" class="form_input" name="cf_email">
    //                 <input type="tel" class="form_input" name="cf_tel">   
    //                 <button class="form_btn btn_red_bd" data-btn-size="m">ОТПРАВИТЬ</button>
    //             </form>

			}

			/* ------------------------------------------------
			Validate END
			------------------------------------------------ */



			/* ------------------------------------------------
			Tooltip START
			------------------------------------------------ */
			
			if(tooltip.length){
				tooltip.each(function(){
						var $this = $(this),
							positionX = $this.data('position-x'),
					      	positionY = $this.data('position-y');

						if ($('html').hasClass('md_touch')) {
						    var tooltipOptions = "click",
						    	closeClick = 'box';
						}
						else if (!$('html').hasClass('md_touch')) {
						    var tooltipOptions =  "mouseenter",
					      		closeClick = false;
						}

					new jBox('Tooltip', {
						attach: $this,
						trigger: tooltipOptions,
						adjustTracker: true, 
						width: 420,
						fade: 500,
						closeOnClick: closeClick,
						animation: "move", 
						getContent:"data-tooltip-content",
						delayOpen: 0,
						delayClose: 0,
						position: { 
							x: positionX,
							y: positionY 
						}, 
						outside: "x",
						onOpen: function() { 
							
						}, 
						onClose: function() { 
							
						}, 
					});

				});

				// <div class="tooltip_box">
	   //              <div class="tooltip_btn" data-position-x="right" data-position-y="center" data-tooltip-content="<div class='tooltip_content'>Удобная  </div>">
	   //              </div>
	   //          </div>

			}

			/* ------------------------------------------------
			Tooltip END
			------------------------------------------------ */




			/* ------------------------------------------------
			FORMSTYLER START
			------------------------------------------------ */

					if (styler.length){
						styler.styler({
							// selectSmartPositioning: true
						});
					}

			/* ------------------------------------------------
			FORMSTYLER END
			------------------------------------------------ */




			/* ------------------------------------------------
			FLEXSLIDER START
			------------------------------------------------ */

					if(flex.length){
						flex.flexslider({
						    animation: "slide",
						    controlNav: true,
							animationLoop: false,
							slideshow: false
						});
					}

			/* ------------------------------------------------
			FLEXSLIDER END
			------------------------------------------------ */




			/* ------------------------------------------------
			ROYALSLIDER START
			------------------------------------------------ */

					if(royalslider.length){
						royalslider.royalSlider({
						    fullscreen: false,
						    controlNavigation: 'bullets',
						    autoScaleSlider: true, 
						    autoScaleSliderWidth: 1872, 
						    autoScaleSliderHeight: 650,
						    loop: true,
						    imageScaleMode: 'none',
						    imageAlignCenter: false,
						    navigateByClick: true,
						    numImagesToPreload:2,
						    arrowsNav:true,
						    arrowsNavAutoHide: false,
						    arrowsNavHideOnTouch: true,
						    keyboardNavEnabled: true,
						    fadeinLoadedSlide: true,
						    sliderDrag:false,
						    globalCaption: false,
						    globalCaptionInside: false,
						    imgWidth: 1872,
						    transitionType:'move',
						    autoPlay: {
						      enabled: true,
						      pauseOnHover: false
						    },
						    block: {
						      delay: 400
						    },
						    bullets: {
						      controlsInside : true
						    },
						    thumbs: {
						      appendSpan: false,
						      firstMargin: true,
						      paddingBottom: 0,
						      fitInViewport:false,
						      spacing: 5
						    }
						});
					}

			/* ------------------------------------------------
			ROYALSLIDER END
			------------------------------------------------ */




			/* ------------------------------------------------
			OWL START
			------------------------------------------------ */

					if(owl.length){
						owl.owlCarousel({
							items : 1,
							// loop: true,
							smartSpeed:1000,
							nav: true
							// autoHeight:true
						});
					}

					// if(owl.length){
					//     owl.each(function(){
					//     	var $this = $(this),
					//       		items = $this.data('items');

					//     	$this.owlCarousel({
					// 			items : 1,
					// 			// loop: true,
					// 			smartSpeed:1000,
					// 			// autoHeight:true,
					//     		dots:false,
					//     		nav: true,
					//             navText: [ '', '' ],
					//             // margin: 30,
					//             responsive : items
					//     	});
					//     });
					// }
					// <div class="owl-carousel" data-items='{  "0":{"items":1},   "480":{"items":2},   "991":{"items":3}  }'></div>

			/* ------------------------------------------------
			OWL END
			------------------------------------------------ */




			/* ------------------------------------------------
			TABS START
			------------------------------------------------ */

					if(tabs.length){
						tabs.easyResponsiveTabs();
					}

			/* ------------------------------------------------
			TABS END
			------------------------------------------------ */




			/* ------------------------------------------------
			ANIMATE block START
			------------------------------------------------ */

					if(wow.length){
				        if($("html").hasClass("md_no-touch")){
							new WOW().init();	
						}
						else if($("html").hasClass("md_touch")){
							$("body").find(".wow").css("visibility","visible");
						}

					}

			/* ------------------------------------------------
			ANIMATE block END
			------------------------------------------------ */




			/* ------------------------------------------------
			POPUP START
			------------------------------------------------ */

					if(popup.length){
						popup.on('click',function(){
						    var modal = $(this).data("popup");
						    $(modal).arcticmodal();
						});
					};

			/* ------------------------------------------------
			POPUP END
			------------------------------------------------ */




		});

		
		$(window).load(function(){

			

		});




//  /*================================================>  
//                                 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INCLUDE AND INITIALIZE Plugins END    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//  <================================================
