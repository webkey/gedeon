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
	/*try-slider*/
	var $testsSlider = $('.try-slider');
	if($testsSlider.length){
		$testsSlider.on('init', function (event, slick) {
			if (slick.currentSlide == 0) {
				$(this).css({'visibility':'visible'});
			}
		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
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

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	slidersInit();
	equalHeightInit();
});