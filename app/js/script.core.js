;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;
			
			// self.backToTopBtn({
			//     transitionIn: 'bounceInRight',
			//     transitionOut: 'bounceOutRight'
			// });
			// self.firstScreen.init();
			// self.mainMenu();
			// self.videoPlaySlider.init();
			// self.InputFieldsCheck();
			// self.anchor();
			// self.responsivePositionChange.init();
			// self.imgSrc.init();
			// self.responsiveMenu.init();
			// self.svgAttr.init();
			// self.tabs();
			// self.includeScipts.init();
			// self.mapYa();
		},

		windowLoad: function(){

			var self = this;
			
			// self.videoPlay();
			// self.videoPlay2();
			self.preloader();
			// self.footerBottom.init();
			// if($('.gmap').length){

			// 	self.googleMaps();

			// }
			
		},

		// Масштабирование сайта  (scale) START
		// var elm = document.getElementById('all'); // all -- элемент, в который был обернут весь сайт
		// 	var coeff = document.body.clientWidth/elm.offsetWidth; // считаем коэффициент масштабирования так, чтобы элемент all занял весь экран
		// 	if (coeff>1) coeff=1; // нам нужно только уменьшение сайта, но не его увеличение, поэтому ограничиваем коэффициент сверху единицей
		// 	if (coeff<0.6) coeff=0.6; // ограничение снизу добавлено для того, чтобы сайт совсем уж не превращался в нечитаемый
		// 	if (coeff!=1.0) {
		// 	  if (navigator.userAgent.indexOf('Firefox')!=-1) elm.style.boxShadow='none';  // масштабирование в Firefox порождало некорректное отображение boxshadow, и пришлось это свойство отключить
		// 	  elm.style.webkitTransform = 
		// 	  elm.style.msTransform = 
		// 	  elm.style.mozTransform = 
		// 	  elm.style.transform = 'scale('+coeff+')'; // собственно масштабирование
		// 	}
		// Масштабирование сайта  (scale) End 

		/**
		**	Yandex Map
		**/

	    mapYa: function(){

	    	ymaps.ready(init);

		    var myMap,
		    	myCollection,
		        myPlacemark,
		        myPlacemark2;

		    function init(){     

		    	// Инициализация карты START
			        myMap = new ymaps.Map ("ymap", {
			            center: [46.97392531, 31.96526450],
			            zoom: 17,
			            // controls: ['smallMapDefaultSet'], //Набор кнопок, предназначенный для маленьких (менее 300 пикселей в ширину) карт.
			            // controls: ['largeMapDefaultSet'] //Набор кнопок, предназначенный для больших (более 1000 пикселей в ширину) карт.
			        });

			    // Инициализация карты END


		        // Добавим собственную кнопку в левый нижний угол START

					// var myButton = new ymaps.control.Button("Моя кнопка");
					// myMap.controls.add(myButton, {
					//     float: "none",
					//     position: {
					//         bottom: 10,
					//         left: 10
					//     }
					// });

				// Добавим собственную кнопку в левый нижний угол END
				

				// Cоздания собственной адаптивной кнопки с использованием класса control.Button. START

					// var myButton = new ymaps.control.Button({
					//       data: {
					//         // Текст кнопки.
					//         content: "<b>Кнопка</b>",
					//         // Изображение иконки кнопки.
					//         image: 'my_button.png',
					//         // Текст всплывающей подсказки, которая появляется
					//         // при наведении на кнопку курсора мыши. 
					//         title: "Нажми меня"
					//       },
					//       options: {
					//         // Поскольку кнопка будет менять вид в зависимости от размера карты,
					//         // зададим ей три разных значения maxWidth в массиве.
					//         maxWidth: [28, 150, 178]
					//       }
					// );
					// myMap.controls.add(myButton, float);

				// Cоздания собственной адаптивной кнопки с использованием класса control.Button. END

				// Добавление или удаление элементов управления START
					
					myMap.controls  //add вместо remove
						.remove('geolocationControl')
						.remove('searchControl')
						.remove('routeEditor')
						.remove('trafficControl')
						.remove('typeSelector')
						.remove('fullscreenControl')
						.remove('zoomControl')
						.remove('rulerControl'); 
				
				// Добавление или удаление элементов управления END

		        

		        // Поведение карты
			        myMap.behaviors
				    .disable(['scrollZoom']) //отключает поведение
				    .enable(['drag', 'dblClickZoom', 'multiTouch']); //включает поведение


			    // Подгоним размер карты под новый размер контейнера
				// (например, если изменилась верстка страницы или карта была инициализирована
				// в скрытом состоянии)
					// map.container.fitToViewport();

				// При наведении на маркер меняется маркер 
				// myPlacemark.events
				// 	.add('mouseenter', function (e) {
			 //            // Ссылку на объект, вызвавший событие,
			 //            // можно получить из поля 'target'.
			 //            e.get('target').options.set('preset', 'islands#greenIcon');
			 //        })
			 //        .add('mouseleave', function (e) {
			 //            e.get('target').options.unset('preset');
			 //    });
				

		        // Коллекции иконок маркера
			        myCollection = new ymaps.GeoObjectCollection({}, {
				       	iconLayout: 'default#image',
				        iconImageHref: 'images/ymap.png',
				        iconImageSize: [42, 56],
				        iconImageOffset: [-30, -60]
				    });

		        
		        // Маркеры
			        myPlacemark = new ymaps.Placemark([46.97389593, 31.96580094], { 
			        	balloonContentHeader: '<img src="images/logo.png" alt="" /><div class="head_map">Логово</div>',
					    balloonContentBody: 'Живу я ',
					    balloonContentFooter: 'Привет ',
					    hintContent: 'В этом доме живу я'
			        });

			        myPlacemark2 = new ymaps.Placemark([46.97330293, 31.96558637], { 
			        	balloonContentHeader: '<img src="images/logo.png" alt="" /><div class="head_map">Логово</div>',
					    balloonContentBody: 'Живу я ',
					    balloonContentFooter: 'Привет ',
					    hintContent: 'В этом доме живу я'
			        });

		        

		        // Глобальная коллекция - добавление меток
			        myCollection.add(myPlacemark).add(myPlacemark2);
			        myMap.geoObjects.add(myCollection);
			        // Открытие попапа после загрузки страницы
			        myPlacemark.balloon.open();
			        

		    }

	    },

		/**
		**	Include Scipts
		**/

		includeScipts:{

			init: function(){

				var self = this;

				self.body = $("body");
				self.maxhheight = $("[data-mh]");


				if(self.maxhheight.length){
					self.include("jquery.matchHeight-min.js");
				}


			},

			include: function(url){
				
				var self = this;

				self.body.append('<script src="/bitrix/templates/shared_files/'+ url + '"></script>'); 

			}
		},

		/**
		**	Tabs
		**/

		tabs: function(){

			$('#js-tabs').each(function(){

				var $this = $(this),
					active = $this.children('.tabs_list').find("li.active").length ? $this.children('.tabs_list').find("li.active") : $this.children('.tabs_list').find('li:first-child').addClass('active'),
					index = active.index();

				$this.find('#tabs_box').children("div").eq(index).show();
				
			});

			$('.tabs_list').on('click', 'li', function(){

				var ind = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$(this).closest('#js-tabs')
					   .find('.tabs_box')
					   .children()
					   .eq(ind)
					   .addClass('active')
					   .show()
					   .siblings()
					   .removeClass('active')
					   .hide();

			});

		},


		/**
		**	Back to top
		**/

		backToTopBtn: function(config){

			config = $.extend({
				offset: 350,
				transitionIn: 'bounceInRight',
				transitionOut: 'bounceOutRight'
			}, config);

			var btn = $('<button></button>', {
				class: 'back_to_top animated hide',
				html: '<i class="fa fa-angle-up"></i>'
			}).appendTo($('body')),

			$wd = $(window),
			$html = $('html'),
			$body = $('body');

			$wd.on('scroll.back_to_top', function(){

				if($wd.scrollTop() > config.offset){

					btn.removeClass('hide '+config.transitionOut).addClass(config.transitionIn);

				}
				else{

					btn.removeClass(config.transitionIn).addClass(config.transitionOut);

				}

			});

			btn.on('click', function(){

				$html.add($body).animate({

					scrollTop: 0

				});

			});

	   	},

	   	/**
		**	videoPlay
		**/

		videoPlay2: function(){

			var self = this;

			$('.video_btn').on('click',function(){

				var $this = $(this),
					videoBox = $this.closest('.video_box'),
					video = $("#my-video")[0];

				if(!videoBox.hasClass('pause')){

					videoBox.addClass('pause');
					$this.find('i').addClass('fa-pause').removeClass('fa-play');
					video.play();

				}
				else{

					videoBox.removeClass('pause');
					$this.find('i').addClass('fa-play').removeClass('fa-pause');
					video.pause();

				}

			});

		},

	   	/**
		**	Responsive menu
		**/

		responsiveMenu: {

			init: function(){

				var self = this;

				self.w 		    = $(window);
				self.doc 		= $(document);
				self.nav        = $('#primary_nav');
				self.closeMenu  = $('.close_menu');

				self.appendBlock();
				self.toggleMenu();
				self.showMenu();
				// self.targetClickBody();

			},

			appendBlock : function(){

				var self = this;

				var window = self.w;

				if(window.width() <= 767){
				    $('.menu_item').each(function(){
					    if($(this).find('.dropdown_menu').length){
							$(this).prepend('<span class="dropdown_arrow"><i class="fa fa-angle-down"></i></span>');
					    }
				    });
			    }

			},

			toggleMenu : function(){

				var self = this;

				self.dropdownLink = $('.dropdown_arrow');
				
				self.dropdownLink.on('click', function(){
					$(this).closest('.menu_item').toggleClass('toggle').find('.dropdown_menu').slideToggle();
				});

			},

			showMenu: function(){

				var self = this;

				self.closeMenu.on('click', function(){
					self.nav.toggleClass('show');
				});

				
			},

			targetClickBody: function(){

				var self = this;

				self.doc.on("click ontouchstart", function(event) {

					if ($(event.target).closest("nav,.resp_btn").length) return;

					$("body").removeClass("show_menu");

					if(windowW <= 991){
						$(".menu_item").removeClass("active").find(".dropdown-menu").css("display","none");
					}

					event.stopPropagation();

			    });

			},

			// $('.menu_link').on('click ontouchstart',function(event){
			// 	if($("html").hasClass("md_no-touch"))return;

		 //        var windowWidth = $(window).width(),
		 //            $parent = $(this).parent('.menu_item');
		 //        if(windowWidth > 991){
		 //          // if($("html").hasClass("md_touch")){
		 //            if((!$parent.hasClass('active')) && $parent.find('.dropdown-menu').length){

		 //              event.preventDefault();

		 //              $parent.toggleClass('active')
		 //               .siblings()
		 //               .find('.menu_link')
		 //               .removeClass('active');
		 //            }
		 //          // }  
		 //        }
		        
		 //        else{
		            
		 //          if((!$parent.hasClass('active')) && $parent.find('.dropdown-menu').length){

		 //            event.preventDefault();

		 //            $parent.toggleClass('active')
		 //             .siblings()
		 //             .removeClass('active');
		 //            $parent.find(".dropdown-menu")
		 //             .slideToggle()
		 //             .parents('.menu_item')
		 //             .siblings()
		 //             .find(".dropdown-menu")
		 //             .slideUp();
		 //          }
		 //        }

		 //    });

		},

		/**
		**	SvgAttr
		**/

		svgAttr: {

			init: function(){

				var self = this;			

				self.svg = $('.svg_box');
				self.svgFind = $('svg');
				self.counter = 1;

				self.inspection();
				
			},
			
			inspection: function(){
				
				var self = this;			

				self.svg.each(function(){
					
					var svgW 	= self.svg.find('svg').attr("width");
					var svgH 	= self.svg.find('svg').attr("height");

					if(!$(this).find('svg').is("[viewBox]")){
						$(this).find('svg').attr('viewBox', '0 0 '+svgW+' '+svgH+'');
					}

					$(this).find('svg').attr('id', 'svg'+self.counter+''); 	
					
					self.counter++;

				});

			},
		},

	   	/**
		**	Footer Bottom
		**/
		
		footerBottom: {

			init: function(){

				var self = this;

				self.footer = $('#footer');
				self.page = $('.page_wrap');

				self.calculation();

				$(window).on('resize', function(){

					self.calculation();

				});

			},

			calculation : function(){

				var self = this;
				
			    var footerHeight = self.footer.outerHeight();

			    self.page.css({
			    	'padding-bottom': footerHeight 
			    });

			}

		},

		/**
		**	First screen
		**/

		firstScreen: {

			init: function(){

				var self = this;

				self.w = $(window);
				self.box = $('.first_screen');
				self.header = $('#header');

				self.calculation();

				self.w.on('resize', function(){
					self.calculation();
				});

			},

			calculation: function(){

				var self = this;

				self.wHeight = self.w.height();
				self.hHeader = self.header.outerHeight();
				
				self.box.height(self.wHeight - self.hHeader);
			},

		},

		/**
		**	Google Map
		**/

		googleMaps: function(){

			// Create a map object and specify the DOM element for display.

			var styleArray = [{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#bebebe"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"},{"weight":"0.44"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"simplified"}]}],

				mapSettings = {
					scrollwheel: false,
				    styles: styleArray,
				    mapTypeId: google.maps.MapTypeId.ROADMAP,
				    zoom: 10,
				    // gestureHandling: 'greedy' // - отключение ctrl на zoom 
				};
				if($(window).width() < 768){
					mapSettings = {
						scrollwheel: false,
					    styles: styleArray,
					    mapTypeId: google.maps.MapTypeId.ROADMAP,
					    zoom: 9
					};
				}


			$('.gmap').each(function(i, el){

				var dataCoords = $(el).data('coords'),
					id = $(el).attr('id'),
					markers = [],
					// mapPlace = $(this).parent().find('.map_place'),
					normalIcon = {url: "./images/icons/marker.png"},
					activeIcon = {url: './images/icons/marker_active.png'},
					qtMarkers = dataCoords.length;

				mapSettings.center = dataCoords[0];


				var map = new google.maps.Map(document.getElementById(id), mapSettings);
				// var map = new google.maps.Map(el, mapSettings);

				/* Map center on resize
			    =========================*/
			    var getCen = map.getCenter();

			    google.maps.event.addDomListener(window, 'resize', function() {
			        map.setCenter(getCen);
			    });	


				for (var i = 0; i <= qtMarkers-1; i++) {

					// Create a marker and set its position.
					var marker = new google.maps.Marker({
						map: map,
						position: dataCoords[i],
						// animation: google.maps.Animation.DROP,
						icon: './images/icons/marker.png',
						title: dataCoords[i].title,
						content: dataCoords[i].contents
					});

					markers.push(marker);

					markerInfo(marker, i, qtMarkers, markers);




					/* Animation
				    =========================*/
					// function drop() {
					// 	for (var i = 0; i < markerArray.length; i++) {
					// 		setTimeout(function() {
					// 			addMarkerMethod();
					// 		}, i * 200);
					// 	}
					// }

				}

				/* Info windows
				    =========================*/
				var prev_infowindow =false; 

				function markerInfo(marker, index, qt, markers) {

					marker.addListener('click', function() {

						var contentMap = '<div class="map_container">'+
				      	'<h5 class="map_title">' + marker.title + '</h5>'+
				      	'<div class="map_content">' + marker.content +'</div>'+
				      	'</div>';

				      	var infowindow = new google.maps.InfoWindow({
						    content: contentMap,
						    pixelOffset: new google.maps.Size(-100,0)
						});

						for (var i = 0; i <= qt-1; i++) {
							if(!(i == index)){
								markers[i].setIcon(normalIcon);
							}
						}
						marker.setIcon(activeIcon);

						// Close prev infowindow START

						if( prev_infowindow ) {
				           prev_infowindow.close();
				        }
				        prev_infowindow = infowindow;

				        google.maps.event.addListener(prev_infowindow,'closeclick',function(){ 
						   marker.setIcon(normalIcon);
						});

				        // Close prev infowindow END

						infowindow.open(map, marker);
						
						// Close all infowindow in 5sec START
						setTimeout(function () { 
							infowindow.close(); 
							marker.setIcon(normalIcon);
						}, 10000);
						// Close all infowindow in 5sec END

					});

				}

				// Traffic Layer start

				var trafficLayer = new google.maps.TrafficLayer();
				var transitLayer = new google.maps.TransitLayer();
				var bikeLayer = new google.maps.BicyclingLayer();
				
				$('#traffic-b').click(function(){
					trafficLayer.setMap(map);
					transitLayer.setMap(null);
					bikeLayer.setMap(null);
				});
				$('#transit-b').click(function(){
					trafficLayer.setMap(null);
					transitLayer.setMap(map);
					bikeLayer.setMap(null);
				});
				$('#bike-b').click(function(){
					trafficLayer.setMap(null);
					transitLayer.setMap(null);
					bikeLayer.setMap(map);
				});

				// Traffic Layer end

			    /* Changed markers position on click button
			    =========================*/

				// function newLocation(newLat,newLng){
				// 	map.setCenter({
				// 		lat : newLat,
				// 		lng : newLng
				// 	});
				// }

			    // $(".map_coord").on('click', function (){
			    // 	var coords = $(this).data('coords');

			    // 	newLocation(coords.lat,coords.lng)

				// });
				// <p class="map_coord" data-coords="{"lat": 55.7530705, "lng": 37.5757987}"></p>

				// ======== end ========



				/* Enable scroll zoom after click on map
			    =========================*/
				    map.addListener('click', function() {
				       map.setOptions({
				           scrollwheel: true
				       });
				    });
			     /* END
			    =========================*/

				/* Enable scroll zoom after drag on map
			    =========================*/
				    map.addListener('drag', function() {
				       map.setOptions({
				           scrollwheel: true
				       });
				    });
			     /* END
			    =========================*/

				/* Disable scroll zoom when mouse leave map
			    =========================*/
				    map.addListener('mouseout', function() {
				       map.setOptions({
				           scrollwheel: false,
				       });
				    });

			    /* END
			    =========================*/


			});
			
		},

		/**
		**	Google Map
		**/

	    googleMaps: function(){

	        var mapsCollection = [];

	        var styleArray ={
	        	'dark': [{"featureType": "all", "elementType": "labels.text.fill", "stylers": [{"saturation": 36 }, {"color": "#000000"}, {"lightness": 40 } ] }, {"featureType": "all", "elementType": "labels.text.stroke", "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16 } ] }, {"featureType": "all", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "administrative", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 17 }, {"weight": 1.2 } ] }, {"featureType": "landscape", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 20 } ] }, {"featureType": "poi", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 21 } ] }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#000000"}, {"lightness": 17 } ] }, {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"color": "#000000"}, {"lightness": 29 }, {"weight": 0.2 } ] }, {"featureType": "road.arterial", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 18 } ] }, {"featureType": "road.local", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 16 } ] }, {"featureType": "transit", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 19 } ] }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000508"}, {"lightness": 17 } ] } ],
	        	'default': [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	        };

	        $('.gmap').each(function(i, el){

	            var dataCoords = $(el).data('coords'),
	                dataZoom = $(el).data('zoom'),
	                dataStyle = $(el).data('style') ? $(el).data('style') : 'default',
	                dataType = $(el).data('type'),
	                mapStyle;

	            for (var key in styleArray) {
				  if(key == dataStyle){
				  	mapStyle = styleArray[key];
				  }
				}
	            var mapSettings = {
	                map_options: {
	                	styles: mapStyle,
	                    zoom: dataZoom,
	                    scrollwheel: false,
	                    mapTypeId: dataType
	                },
	                locations: dataCoords,
	                generate_controls: false,
	                controls_on_map: false,
	                view_all: false,
	                map_div: '#' + $(el).attr('id')
	            };

	            mapsCollection.push(new Maplace(mapSettings).Load());

	        });

	        if(!mapsCollection.length) return;

	        $(window).on('resize.map', function(){
	            setTimeout(function(){
	                mapsCollection.forEach(function(elem, index, arr){
	                    elem.Load();
	                });
	            }, 100);
	        });

	        // <div class="gmap" id="gmap" data-zoom="15" data-type="hybrid" data-coords='[{"lat": 55.547963, "lon": 36.985302, "title":"Кластер"}]'></div>

	    },

		/**
		**	Anchor
		**/

		anchor: function(){

			var self = this;

			self.w = $(window);
			self.htmlBody = $('html, body');
			self.anchorLink = $(".anchor[href^='#']");
			self.headerH = $('#header').outerHeight();

			if(self.anchorLink.length){

			 	self.anchorLink.on("click", function (event) {
					event.preventDefault();
						self.id  = $(this).attr('href');
						self.top = self.id.offset().top;

					if(self.w.width() > 768){
						self.htmlBody.stop().animate({scrollTop: self.top - self.headerH}, 1500);
					}
					else if(self.w.width() <= 767){
						self.htmlBody.stop().animate({scrollTop: self.top }, 1500);
					}
					
				});

			}

		},

		/**
		**	Responsive change position
		**/

		responsivePositionChange: {
			init: function(){

				var self = this;

				self.w = $(window);
				self.body = $('body');
				self.blockPrep = $('.slider3d_textbox');
				self.blockParent = $('#slider_3d');

				self.scrollWidth();
		        self.changePosition();

				self.w.on('resize',function(){

			        setTimeout(function(){
			        	self.scrollWidth();
		            	self.changePosition();

		            },200);

	            });

			},

			scrollWidth : function(){

				var self = this;

				//скрипт  считывает сколько ширина скрола начало

				function detectScrollBarWidth(){
					var div = document.createElement('div'),
						cssObj   = {
							"position": "absolute",
							"top": "-9999px",
							"width": "50px",
							"height": "50px",
							"overflow": "scroll"
						};	

					div.className = "detect_scroll_width";
					$(div).css(cssObj);
					document.body.appendChild(div);
					self.scrollW = div.offsetWidth - div.clientWidth;
					document.body.removeChild(div);
					// console.log(self.scrollW);
				}
				detectScrollBarWidth();

			},

			changePosition: function(){

				var self = this;

				var bodyWidth = self.w.width();

				if(bodyWidth + self.scrollW <= 767 && !$('body').hasClass('changePosition')){
					self.body.find(self.blockParent).after(self.blockPrep);
					$('body').addClass('changePosition');
				}
				else if(bodyWidth + self.scrollW > 767 && $('body').hasClass('changePosition')){
					self.body.find(self.blockParent).find($('.theta-carousel-inner-container')).append(self.blockPrep);
					$('body').removeClass('changePosition');
				}

			}

		},

		/**
		**	Img src to backgrund
		**/

		imgSrc: {

			init: function(){

				var self = this;

				self.img = $('.img');

				self.changeToBg();
			},

			changeToBg: function(){

				var self = this;

				self.img.each(function(){

					self.src = $(this).attr('src');
					self.imgParent = $(this).parent('.parent');

						self.imgParent.css({
							"background-image": 'url("korpus/../'+ self.src +'")'
						});	
				});

			}

		},

		/**
		**	Video
		**/

		videoPlay:function(){

			if($("#my-video").length){

				$("#my-video")[0].play();
				
			}
		
		},

		/**
		**	Main Menu
		**/

		mainMenu: function(){

			$('.menu_btn').on('click', function(){
				$(this).toggleClass('active');
				$('.main_menu_box').toggleClass('open');
			});

		},

		/**
		**	Play video
		**/

		videoPlaySlider: {
			init: function(){

				var self = this;

				self.videoBox = $('.slider_video');
				self.play = $('.video_icon_play');

				self.playVideo();

			},

			playVideo: function(){

				var self = this;


				self.play.on('click', function(){
					
					self.videoSrc = $(this).attr('data-src');
					self.videoFrame = $('.video_frame');

					if(!$(this).closest(self.videoBox).hasClass('active')){
						$(this).hide();
						$(this).closest(self.videoBox).addClass('active');
						$(this).closest(self.videoBox).find(self.videoFrame).attr('src',self.videoSrc+'?rel=0&amp;wmode=transparent&amp;autoplay=true');
					}

				});

			},

		},

		/**
		**	Input Fields Check
		**/

		InputFieldsCheck: function(){

			var self = this;

			$('input').on('click', function(){

				var $this = $(this),
					formBox = $('.form_row'),
					value = $this.val();

				if($this.is(':focus')){
					$this.addClass('focus');	
					$this.closest(formBox).addClass('focus_row');
				}
				else{
					$this.removeClass('focus');
					$this.closest(formBox).removeClass('focus_row');
				}

			});

			$('input').on('blur', function(){

				var $this = $(this),
					formBox = $('.form_row'),
					value = $this.val();

				if(value == ''){
					$this.removeClass('focus');
					$this.closest(formBox).removeClass('focus_row');
				}
				else{
					$this.addClass('focus');	
					$this.closest(formBox).addClass('focus_row');
				}

			});

		},

		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			self.preloader = $('#page-preloader');
	        self.spinner   = self.preloader.find('.preloader');

		    self.spinner.fadeOut();
		    self.preloader.delay(350).fadeOut('slow');
		},

	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);