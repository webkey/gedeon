/*resize only width*/
var resizeByWidth = true;

var prevWidth = -1;
$(window).resize(function () {
	var currentWidth = $('body').outerWidth();
	resizeByWidth = prevWidth != currentWidth;
	if(resizeByWidth){
		$(window).trigger('resizeByWidth');
		prevWidth = currentWidth;
	}
});
/*resize only width end*/

/*device detected*/
var DESKTOP = device.desktop();
//console.log('DESKTOP: ', DESKTOP);
var MOBILE = device.mobile();
//console.log('MOBILE: ', MOBILE);
var TABLET = device.tablet();
//console.log('MOBILE: ', MOBILE);
/*device detected end*/

/* placeholder */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/* placeholder end */

/*state form buttons*/
function stateButtons(){
	$(window).on('load', function () {
		var btns = $('input:submit, input:button, input:reset');

		$.each(btns, function () {
			var $currentButton = $(this);

			if($currentButton.prop('disabled')){
				$currentButton.parent().addClass('disabled');
			}
		})
	})
}
/*state form buttons end*/

/*state form fields*/
function stateFields(){
	$( "input, textarea, select" ).focus(function() {
		var $thisField = $(this);

		$thisField
			.prev()
			.addClass('focus');

		$thisField
			.parent()
			.addClass('focus')
			.prev()
			.addClass('focus');

	}).blur(function() {
		var $thisField = $(this);

		$thisField
			.prev()
			.removeClass('focus');

		$thisField
			.parent()
			.removeClass('focus')
			.prev()
			.removeClass('focus');
	});
}
/*state form fields*/

/*sliders*/
function slidersInit(){
	/*others-list*/
	var $otherSlider = $('.others-list');
	if($otherSlider.length){
		$otherSlider.on('init', function (event, slick) {
			if (slick.currentSlide == 0) {
				$(this).css({'visibility':'visible'});
			}
		}).slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: false,
			speed: 200,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},{
				breakpoint: 880,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false
				}
			}]
		});
	}

	/*exam slider*/
	var $examSlider = $('.exam-slider');
	if($examSlider.length){
		$examSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var $status = $(this).closest('.tests-slider').find('.exam-counter');
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + ' из ' + slick.slideCount);
		}).on('init', function (event, slick) {
			if (slick.currentSlide == 0) {
				$(this).css({'visibility':'visible'});
			}
		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true
		});
	}
}
/*sliders end*/

/*equalHeight*/
function equalHeightInit(){
	var otherList = $('.others-list');
	if (otherList.length) {
		imagesLoaded(document.querySelector('.others-list'), function (instance) {
			//console.log(instance);
			otherList.each(function () {
				var amount = $('.others-item', this).length;
				$('.article__img', this).equalHeight({
					amount: amount,
					//useParent: true,
					//parent: otherList,
					resize: true
				});

				$('.article__date', this).equalHeight({
					amount: amount,
					resize: true
				});

				$('.article__title', this).equalHeight({
					amount: amount,
					resize: true
				});

				$('.article__text', this).equalHeight({
					amount: amount,
					resize: true
				});
			});
		});
	}
}
/*equalHeight end*/

/*sticky layout*/
function stickyLayout(){
	/*aside*/
	var $aside = $(".aside");
	if ($aside.length) {
		setTimeout(function () {
			$aside.stick_in_parent({ // sticky element do not have relative
				parent: '.main-holder', // parent must have relative
				bottoming: '.pre-footer'
			});
		}, 100);
		//$(window).on('load resize', function () {
		//	if($(window).outerWidth() < 1350){
		//		$('.aside').trigger("sticky_kit:detach").attr('style','');
		//	}
		//})
	}

	/*menu*/
	//var $menu = $(".menu");
	//if ($menu.length) {
	//	setTimeout(function () {
	//		$menu.stick_in_parent({
	//			parent: '.main-holder',
	//			bottoming: '.pre-footer'
	//		});
	//	}, 100);
	//}
}
/*sticky layout end*/

/*header fixed*/
function headerFixed(){
	var $page = $('html');
	var $headerPanel = $('.main-nav');
	var $headerPanelWrap = $('.main-nav-wrap');
	if (!$headerPanel.length) {
		return;
	}

	$headerPanelWrap.css({
		//height: $headerPanel.outerHeight(),
		height: 105
	});

	$(window).on('load scroll resizeByWidth', function () {
		var scrollTop = $(window).scrollTop();

		$page.toggleClass('header-fixed', scrollTop >= $headerPanelWrap.offset().top);
	});
}
/*header fixed end*/

/*articles layout*/
function articlesLayout(){
	var $articles = $('.articles__list');
	if(!$articles.length){
		return;
	}

	$(window).load(function () {
		var $articlesPosition = $articles.masonry({
			itemSelector: '.articles__item',
			percentPosition: true
		});

		$articlesPosition.on( 'layoutComplete', function() {
			//$(document.body).trigger("sticky_kit:recalc");
		});
	})
}
/*articles layout end*/

/*scroll TO*/
$.extend($.easing, {
	def: 'easeOutQuad', easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}
});

(function( $ ) {

	var settings;
	var disableScrollFn = false;
	var navItems;
	var navs = {}, sections = {};

	$.fn.navScroller = function(options) {
		settings = $.extend({
			scrollToOffset: 30,
			scrollSpeed: 800,
			activateParentNode: true
		}, options );
		navItems = this;

		//attatch click listeners
		navItems.on('click', function(event){
			event.preventDefault();
			var navID = $(this).attr("href").substring(1);
			disableScrollFn = true;
			activateNav(navID);
			populateDestinations(); //recalculate these!
			$('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
					settings.scrollSpeed, "easeInOutExpo", function(){
						disableScrollFn = false;
					}
			);
		});

		//populate lookup of clicable elements and destination sections
		populateDestinations(); //should also be run on browser resize, btw

		// setup scroll listener
		$(document).scroll(function(){
			if (disableScrollFn) { return; }
			var page_height = $(window).height();
			var pos = $(this).scrollTop();
			for (i in sections) {
				if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height){
					activateNav(i);
				}
			}
		});
	};

	function populateDestinations() {
		navItems.each(function(){
			var scrollID = $(this).attr('href').substring(1);
			navs[scrollID] = (settings.activateParentNode)? this.parentNode : this;
			sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
		});
	}

	function activateNav(navID) {
		for (nav in navs) { $(navs[nav]).removeClass('active'); }
		$(navs[navID]).addClass('active');
	}
})( jQuery );

function scrollMenu(){
	var $contactsAnchor = $('.menu');
	if(!$contactsAnchor.length){return}
	$contactsAnchor.find('a').navScroller();
}
/*scroll TO end*/

/*content min height*/
function contentMinHeight(){
	$(window).on('load resizeByWidth', function () {
		$('.main-content').css('min-height', $('.aside').outerHeight());
	})
}
/*content min height end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	stateButtons();
	stateFields();
	slidersInit();
	equalHeightInit();
	stickyLayout();
	headerFixed();
	articlesLayout();
	scrollMenu();

	contentMinHeight();
});