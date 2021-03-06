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
		function footerBottomChange() {
			var footerOuterHeight = footer.outerHeight();
			footer.css({
				'margin-top': -footerOuterHeight
			});
			$('.spacer').css({
				'height': footerOuterHeight
			});
		}

		footerBottomChange();

		setTimeout(function () {
			footerBottomChange();
		}, 600);
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

/*sidebar switcher for mobile*/
function sidebarSwitcher(){
	var $btnSwitcher = $('.btn-aside');
	if(!$btnSwitcher.length){
		return;
	}

	var $html = $('html');
	var $overlay = $('<div class="aside-overlay">');
	var showClass = 'aside-show';
	var btnActiveClass = 'active';
	var animateSpeed = 200;

	$btnSwitcher.on('click', function (e) {
		e.preventDefault();

		var $currentBtn = $(this);

		if($currentBtn.hasClass(btnActiveClass)){
			closeSiteMap();
			return;
		}

		$currentBtn.toggleClass(btnActiveClass, !$currentBtn.hasClass(btnActiveClass));
		$html.toggleClass(showClass, $currentBtn.hasClass(btnActiveClass));

		$overlay
				.insertBefore($('.aside'))
				.stop().fadeOut(0, function () {
			$overlay.fadeIn(animateSpeed);
		});

		e.stopPropagation();
	});

	$(document).click(function () {
		closeSiteMap();
	});

	$('.aside').on('click', function(e){
		e.stopPropagation();
	});

	$('.aside-panel-close').on('click', function(e){
		closeSiteMap();
	});

	function closeSiteMap(){
		$btnSwitcher.removeClass(btnActiveClass);
		$html.removeClass(showClass);
		$overlay.stop().fadeOut(animateSpeed, function () {
			$overlay.remove();
		})
	}
}
/*sidebar switcher for mobile end*/

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
			slidesToShow: 5,
			slidesToScroll: 5,
			centerMode: false,
			variableWidth: false,
			infinite: false,
			speed: 200,
			dots: true,
			arrows: false,
			responsive: [{
				breakpoint: 1920,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},{
				breakpoint: 1640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},{
				breakpoint: 1320,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},{
				breakpoint: 1039,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},{
				breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	/*tray*/
	var $tray = $('.tray');
	if($tray.length){
		var $traySlider = $tray.on('init', function (event, slick) {
			if (slick.currentSlide == 0) {
				$(this).css({'visibility':'visible'});
			}
		}).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			dots: true,
			arrows: true,
			responsive: [{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 980,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}]
		});

		$(window).on('resizeByWidth', function () {
			$traySlider.slick('slickGoTo', 0);
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
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true
		});
	}

	/*history slider*/
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
			fade: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			adaptiveHeight: false
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var $yearsListLi = $(this).closest('.sect-history').find('.years-list').find('li');

			$yearsListLi.removeClass('active');
			$yearsListLi
				.eq(nextSlide)
				.addClass('active');

			if (!$(this).is(':animated')) {
				$('html,body')
						.stop()
						.animate({
							scrollTop: $(this).closest('.sect-history__holder').offset().top - ($('.main-nav').outerHeight() + 20)
						}, 300);
			}
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
	var $otherList = $('.others-list');
	if ($otherList.length) {
		imagesLoaded(document.querySelector('.others-list'), function () {
			$otherList.each(function () {
				var amount = $('.others-item', this).length;
				$('.article__img', this).equalHeight({
					amount: amount,
					//useParent: true,
					//parent: $otherList,
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

	/*tests item*/
	var $testsList = $('.tests__list');
	if ($testsList.length) {
		imagesLoaded($testsList, function () {
			$testsList.find('.test__title').equalHeight({
				useParent: true,
				parent: $testsList,
				resize: true
			});
		});
	}

	/*profit*/
	var $profit = $('.section-profit__box');
	if ($profit.length) {
		imagesLoaded($profit, function () {
			$profit.find('.section-profit__img').equalHeight({
				useParent: true,
				parent: $profit,
				resize: true
			});
		});
	}

	/*targets*/
	var $targets = $('.targets');
	if ($targets.length) {
		imagesLoaded($profit, function () {
			$targets.find('h3').equalHeight({
				useParent: true,
				parent: $targets,
				resize: true
			}, 100);
			$targets.find('.targets__panel').equalHeight({
				useParent: true,
				parent: $targets,
				resize: true
			}, 100);
		});
	}
}

function equalHeightStructure(){
	/*profit*/
	var $structure = $('.structure');
	if ($structure.length) {
		imagesLoaded($structure, function () {
			$structure.find('.structure__head').equalHeight({
				useParent: true,
				parent: $structure,
				resize: true
			});

			$structure.find('.structure__foot').equalHeight({
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

		var resizeTimerAside;

		$(window).on('load resize', function () {
			if($(window).width() < 960){
				$aside.trigger("sticky_kit:detach").attr('style','');
				return;
			}

			clearTimeout(resizeTimerAside);
			resizeTimerAside = setTimeout(function () {
				$aside.stick_in_parent({ // sticky element do not have relative
					parent: '.main-holder', // parent must have relative
					bottoming: '.footer'
				});
			}, 100);
		});
	}

	/*menu*/
	var $menu = $(".menu");
	if ($menu.length) {
		var resizeTimerMenu;

		$(window).on('load resize', function () {
			if($(window).width() < 640){
				$aside.trigger("sticky_kit:detach").attr('style','');
				return;
			}

			clearTimeout(resizeTimerMenu);
			resizeTimerMenu = setTimeout(function () {
				$menu.stick_in_parent({
					parent: '.main',
					bottoming: '.footer',
					offset_top: 85
				});
			}, 100);
		});
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

	$(window).on('load scroll resizeByWidth', function () {
		var scrollTop = $(window).scrollTop();

		$page.toggleClass('header-fixed', scrollTop >= $headerPanelWrap.offset().top);

		$page.toggleClass('header-hide', scrollTop >= $('.footer').offset().top - $headerPanel.outerHeight());

		$page.toggleClass('sub-nav-drop-hide', scrollTop >= $('.footer').offset().top - $headerPanel.outerHeight() - $('li.hover > .js-nav-drop').outerHeight() + 10);
	});
}
/*header fixed end*/

/*articles layout*/
function articlesLayout(){
	var $articles = $('.articles__list');
	if(!$articles.length){
		return;
	}

	$articles.css({
		'width': $('.articles__item').outerWidth() * $('.articles__item').length,
		'max-width': '100%'
	});

	imagesLoaded($articles, function () {
		// var $articlesLayout = $articles.masonry({
		// 	itemSelector: '.articles__item',
		// 	percentPosition: true
		// });

		var $body = $('body'),
			$filtersWrapper = $('.articles__list'),
			$filtersTagsGroup = $('.filters-tags-js'),
			dataFilter = 'data-filter',
			tags = {},
			methodAndInit = false,
			methodOrInit = false

		;
		// init Isotope
		var $articlesGrid = $articles.isotope({
			// options
			itemSelector: '.articles__item',
			percentPosition: true
		});

		// bind filter tag click
		$filtersTagsGroup.on( 'change', ':checkbox', function(e) {
			e.preventDefault();

			var $currentTag = $( this ),
				dataTagsGroup = $currentTag.closest('.tags-group-js').attr('data-tags-group'),
				currentDataFilter = $currentTag.attr(dataFilter),
				filterMethod = $currentTag.closest($filtersTagsGroup).attr('data-filter-method'),
				// currentTagIsChecked = $currentTag.prop( 'checked' );
				currentTagIsChecked = $currentTag.prop( 'checked' );

			if (filterMethod === 'or' && !currentTagIsChecked) {
				methodOrInit = true
			} else if (filterMethod === 'or' && currentTagIsChecked) {
				methodOrInit = false;
			}

			if (currentTagIsChecked && filterMethod === 'and') {
				methodAndInit = false;
			} else if (filterMethod === 'and') {
				methodAndInit = currentDataFilter;
			}

			dataTagsGroup = (dataTagsGroup === undefined) ?
				currentDataFilter :
				dataTagsGroup;

			// tags [ dataTagsGroup ] = (currentTagIsChecked) ?
			// 	'' :
			// 	currentDataFilter;

			if (currentTagIsChecked) {
				tags [ dataTagsGroup ] = currentDataFilter;
			} else {
				tags [ dataTagsGroup ] = '';
			}

			var filterValue = (filterMethod === 'or' || methodAndInit || currentTagIsChecked) ? concatValuesOR( tags ) : concatValuesEND ( tags );

			$articlesGrid.isotope({ filter: filterValue });
		});

		// concatenation values of tags OR;
		// example return '.prop1, .prop2';
		// show items which contains prop1 or prop2;
		function concatValuesOR(obj) {
			// console.log('OR');
			var value,
				arr = [];

			for ( var prop in obj ) {
				var thisProp = obj[ prop ];
				if (!thisProp) continue;
				if (methodOrInit && obj[ prop ] === methodAndInit) continue;
				thisProp = (methodAndInit) ? (methodAndInit + thisProp) : thisProp;
				arr.push(thisProp);
			}

			value = arr.join(', ');
			return value;
		}

		// concatenation values of tags END;
		// example return '.prop1.prop2';
		// show items which contains prop1 and prop2;
		function concatValuesEND(obj) {
			// console.log('END');
			var value = '';

			for ( var prop in obj ) {
				value += obj[ prop ];
			}

			return value;
		}

		// add "no product" template
		var tempNoProducts = $('<h3 style="text-align: center; color: tomato;">Нет совпадений</h3>');
		tempNoProducts.hide().insertAfter($filtersWrapper);
		$articlesGrid.on( 'arrangeComplete', function( event, filteredItems ) {
			var lengthItems = filteredItems.length;

			// "no product" show / hide
			if (!lengthItems) {
				tempNoProducts.show();
			} else {
				tempNoProducts.hide();
			}
		});
	});
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
		var offset = $('body').hasClass('no-authorized') ? 0 : 75;
		$contactsAnchor.find('a').navScroller({
			scrollToOffset: offset
		});
	}
}
/*scroll TO end*/

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
			load: function(){
				setTimeout(function () {
					equalHeightStructure();
				}, 100);
			},
			activate: function() {
				equalHeightStructure();
			}
		});

		$('.tab-controls').on('click', 'a', function () {
			if (!$(this).is(':animated')) {
				$('html,body').stop().animate({scrollTop: $helpfulTabs.offset().top - ($('.main-nav').outerHeight() + 20)}, 300);
			}
		})
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
						.closest('.form-line')
						.find('.label-holder')
						.addClass('focus');
				},
				close: function () {
					$(this)
						.closest('.select')
						.removeClass('focus')
						.closest('.form-line')
						.find('.label-holder')
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

/*countimator*/
function countimatorInit(){
	var $counter = $(".counter");
	$(window).on('load', function () {
		$counter.css('visibility', 'visible');
	});
	setTimeout(function () {
		$counter.countimator({
			duration: 1000
		});
	}, 100);
}
/*countimator end*/

/*content min height*/
function contentMinHeight(){
	$(window).on('load resizeByWidth', function () {
		var $aside = $('.aside');
		if(!$aside.length || $aside.is(':hidden')){
			return;
		}
		$('.main-content').css('min-height', $aside.outerHeight());
	})
}
/*content min height end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	footerBottom();
	stateButtons();
	stateFields();
	sidebarSwitcher();
	slidersInit();
	equalHeightInit();
	equalHeightStructure();
	stickyLayout();
	headerFixed();
	articlesLayout();
	scrollMenu();
	tabs();
	if(DESKTOP){
		customSelect($('select.cselect'));
	}
	countimatorInit();

	contentMinHeight();
});