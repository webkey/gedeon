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
	$( "input" ).focus(function() {
		var $thisField = $(this);

		$thisField
			.prev()
			.addClass('focus');

		$thisField
			.closest('.input-wrap')
			.addClass('focus')
			.prev()
			.addClass('focus');

	}).blur(function() {
		var $thisField = $(this);

		$thisField
			.prev()
			.removeClass('focus');

		$thisField
			.closest('.input-wrap')
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
	var $stickyJs = $(".aside");
	if ($stickyJs.length) {
		setTimeout(function () {
			$('.aside').stick_in_parent({ // sticky element do not have relative
				parent: '.main-holder', // parent must have relative
				bottoming: '.pre-footer'
			});
		},100);
		//$(window).on('load resize', function () {
		//	if($(window).outerWidth() < 1350){
		//		$('.aside').trigger("sticky_kit:detach").attr('style','');
		//	}
		//})
	}
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
			console.log('layout done');
		});
	})
}
/*articles layout end*/

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
});