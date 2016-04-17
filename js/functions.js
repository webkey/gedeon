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

/* footer at bottom */
function footerBottom(){
	var footer = $('.footer');
	$(window).on('load resizeByWidth', function () {
		var footerOuterHeight = footer.outerHeight();
		footer.css({
			'margin-top': -footerOuterHeight
		});
		$('.spacer').css({
			'height': footerOuterHeight
		});
	})
}
/* footer at bottom end */

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
			.addClass('focus')
			.end()
			.closest('.input-wrap')
			.addClass('focus');

		$thisField
			.closest('.form-line')
			.find('.label-holder')
			.addClass('focus')
			.prev()
			.addClass('focus');

	}).blur(function() {
		var $thisField = $(this);

		$thisField
			.prev()
			.removeClass('focus')
			.end()
			.closest('.input-wrap')
			.removeClass('focus');

		$thisField
			.closest('.form-line')
			.find('.label-holder')
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

	/*exam slider*/
	var $historySliderElement = $('.history-slider');
	if($historySliderElement.length){
		var $sliderSlider = $historySliderElement.on('init', function (event, slick) {
			var $currentSlider = $(this);

			$currentSlider.css({'visibility':'visible'});

			$currentSlider
				.closest('.sect-history')
				.find('.years-list')
				.find('li')
				.eq(slick.currentSlide)
				.addClass('active');
		}).slick({
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			adaptiveHeight: true
			//customPaging : function(slider, i) {
			//	var paging = $(slider.$slides[i]).data('paging');
			//	return '<a><span>'+paging+'</span></a>';
			//}
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var $yearsListLi = $(this).closest('.sect-history').find('.years-list').find('li');

			$yearsListLi.removeClass('active');
			$yearsListLi
				.eq(nextSlide)
				.addClass('active');
		});

		function yearsSliderEvent(){
			$('.years-list').on('click', 'a', function (e) {
				var currentIndex = $(this).closest('li').index();

				$sliderSlider.slick('slickGoTo', currentIndex);
				e.preventDefault();
			})
		}

		yearsSliderEvent();
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

	/*profit*/
	var $profit = $('.section-profit__box');
	if ($profit.length) {
		imagesLoaded($profit, function (instance) {
			//console.log(instance);
			$profit.find('.section-profit__img').equalHeight({
				//amount: 3,
				useParent: true,
				parent: $profit,
				resize: true
			});
		});
	}
}

function equalHeightStructure(){
	/*profit*/
	var $structure = $('.structure');
	if ($structure.length) {
		imagesLoaded($structure, function (instance) {
			//console.log(instance);
			$structure.find('.structure__head').equalHeight({
				//amount: 2,
				useParent: true,
				parent: $structure,
				resize: true
			});

			$structure.find('.structure__foot').equalHeight({
				//amount: 2,
				useParent: true,
				parent: $structure,
				resize: true
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
	var $menu = $(".menu");
	if ($menu.length) {
		setTimeout(function () {
			$menu.stick_in_parent({
				parent: '.main',
				bottoming: '.footer',
				offset_top: 140
			});
		}, 100);
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
			if (!$(this).is(':animated')) {
				$('html,body').stop().animate({scrollTop: sections[navID] - settings.scrollToOffset}, settings.scrollSpeed, "easeInOutExpo", function () {
							disableScrollFn = false;
						}
				);
			}
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

	if($contactsAnchor.length){
		$contactsAnchor.find('a').navScroller({
			scrollToOffset: 75
		});
	}
}
/*scroll TO end*/

/*terminals switcher*/
function targetsSwitcherInit(){
	var $targetsItem = $('.targets__item');
	if(!$targetsItem.length){
		return;
	}

	var $targetsItemDrop = $targetsItem.find('.targets__panel');
	var _activeClass = 'active';
	var _duration = 350;
	var flag = true;

	$targetsItem.on('click', 'h3', function () {
		var $currentItem = $(this).closest('.targets__item');
		var $currentItemDrop = $currentItem.find($targetsItemDrop);

		if($targetsItemDrop.is(':animated')){
			return false;
		}

		flag = !$currentItem.hasClass(_activeClass);

		closeTerminalsDrop();

		if(!flag){
			return false;
		}

		var $currentGroup = $currentItemDrop.closest('.targets__row');
		var $dropsInCurrentGroup = $currentGroup.find($targetsItemDrop);

		var height = Math.max.apply(Math, $dropsInCurrentGroup.map(function () {
			return $(this).outerHeight(true);
		}).get());

		$dropsInCurrentGroup.parent().stop().animate({ height: height },_duration, function () {
			scrollToTop.call(this);
		});

		$currentGroup.find($targetsItem).toggleClass(_activeClass, flag);

		function scrollToTop() {
			if (!$(this).is(':animated')) {
				$('html,body').stop().animate({scrollTop: $currentItem.offset().top - 95}, _duration);
			}
		}

		flag = true;
		return false;
	});

	$(document).click(function () {
		closeTerminalsDrop();
	});

	$targetsItemDrop.on('click', function(e){
		e.stopPropagation();
	});

	function closeTerminalsDrop(){
		$targetsItemDrop.parent().stop().animate({height: 0},_duration)
		$targetsItem.removeClass(_activeClass);
	}

	/*targets*/
	var $targets = $('.targets');
	if ($targets.length) {
		setTimeout(function () {
			$targets.find('h3').equalHeight({
				useParent: true,
				parent: $targets,
				resize: true
			}, 100);
		})
	}
}
/*terminals switcher end*/

/* tabs */
function tabs() {
	var $helpfulTabs = $('.tabs-wrap');
	if ($helpfulTabs) {
		$helpfulTabs.responsiveTabs({
			active: 0,
			rotate: false,
			startCollapsed: 'accordion',
			collapsible: 'accordion',
			setHash: false,
			//animation: 'fade', // slide
			duration: 300, // default 500
			animationQueue: true,
			//scrollToAccordion: true,
			load: function(){
				setTimeout(function () {
					equalHeightStructure();
				}, 100);
			},
			//scrollToAccordionOffset: true
			activate: function() {
				equalHeightStructure();
			}
			//activateState: function(e, state) {
			//	console.log(state);
			//}
		});
	}
}
/* tabs end */

/* multiselect init */
// add ui position add class
function addPositionClass(position, feedback, obj){
	removePositionClass(obj);
	obj.css( position );
	obj
		.addClass( feedback.vertical )
		.addClass( feedback.horizontal );
}
// add ui position remove class
function removePositionClass(obj){
	obj.removeClass('top');
	obj.removeClass('bottom');
	obj.removeClass('center');
	obj.removeClass('left');
	obj.removeClass('right');
}
function customSelect(select){
	if ( select.length ) {
		selectArray = new Array();
		select.each(function(selectIndex, selectItem){
			var placeholderText = $(selectItem).attr('data-placeholder');
			var flag = true;
			if ( placeholderText === undefined ) {
				placeholderText = $(selectItem).find(':selected').html();
				flag = false;
			}
			var classes = $(selectItem).attr('class');
			selectArray[selectIndex] = $(selectItem).multiselect({
				header: false,
				height: 'auto',
				minWidth: 50,
				selectedList: 1,
				classes: classes,
				multiple: false,
				noneSelectedText: placeholderText,
				show: ['fade', 100],
				hide: ['fade', 100],
				create: function(event){
					var select = $(this);
					var button = $(this).multiselect('getButton');
					var widget = $(this).multiselect('widget');
					button.wrapInner('<span class="select-inner"></span>');
					button.find('.ui-icon').append('<i class="arrow-select"></i>')
						.siblings('span').addClass('select-text');
					widget.find('.ui-multiselect-checkboxes li:last')
						.addClass('last')
						.siblings().removeClass('last');
					if ( flag ) {
						$(selectItem).multiselect('uncheckAll');
						$(selectItem)
							.multiselect('widget')
							.find('.ui-state-active')
							.removeClass('ui-state-active')
							.find('input')
							.removeAttr('checked');
					}
				},
				selectedText: function(number, total, checked){
					var checkedText = checked[0].title;
					return checkedText;
				},
				position: {
					my: 'left top',
					at: 'left bottom',
					using: function( position, feedback ) {
						addPositionClass(position, feedback, $(this));
					}
				},
				open: function () {
					$(this)
						.closest('.select')
						.addClass('focus')
						.prev('.label-holder')
						.addClass('focus');
				},
				close: function () {
					$(this)
						.closest('.select')
						.removeClass('focus')
						.prev('.label-holder')
						.removeClass('focus');
				}
			});
		});
		$(window).resize(selectResize);
	}
}
function selectResize(){
	if ( selectArray.length ) {
		$.each(selectArray, function(i, el){
			var checked = $(el).multiselect('getChecked');
			var flag = true;
			if ( !checked.length ) {
				flag = false
			}
			$(el).multiselect('refresh');
			if ( !flag ) {
				$(el).multiselect('uncheckAll');
				$(el)
					.multiselect('widget')
					.find('.ui-state-active')
					.removeClass('ui-state-active')
					.find('input')
					.removeAttr('checked');
			}
			$(el).multiselect('close');
		});
	}
}
/*choose "other" param*/
$('select').on('change', function() {
	var $currentItem = $(this);
	var other = $currentItem.find('option:selected').data('other');
	console.log('$(this).val(): ', $(this).val());
	console.log('other: ', other);
	var addInputJs = $(this).closest('.form-line').find('.add-input-js');
	addInputJs.hide();

	if(other){
		addInputJs
			.show()
			.find('input')
			.focus();
	}
});
/*choose "other" param end*/
/* multiselect init end */

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
	footerBottom();
	stateButtons();
	stateFields();
	slidersInit();
	equalHeightInit();
	equalHeightStructure();
	stickyLayout();
	headerFixed();
	articlesLayout();
	scrollMenu();
	targetsSwitcherInit();
	tabs();
	if(DESKTOP){
		customSelect($('select.cselect'));
	}

	contentMinHeight();
});