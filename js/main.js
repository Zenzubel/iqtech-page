'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body');

	function activeBurger() {

		const burgerIcon = document.querySelector('.burger-js');

		if (burgerIcon) {

			const burgerMenuList = document.querySelector('.mobile-menu-js'),
				burgerMenuLink = burgerMenuList.querySelectorAll('.close-mob-menu-js');

			burgerIcon.addEventListener('click', (event) => {
				burgerIcon.classList.toggle('active');
				if (burgerIcon.classList.contains('active')) {
					body.classList.add('lock');
					burgerMenuList.classList.add('active');
				} else {
					body.classList.remove('lock');
					burgerMenuList.classList.remove('active');
				}
			});

			burgerMenuList.addEventListener('click', (event) =>{
				const target = event.target;
				if (target && target.classList.contains('close-mob-menu-js')){
					burgerIcon.classList.remove('active');
					burgerMenuList.classList.remove('active');
					body.classList.remove('lock');
				}
			});
		}
	}

	function headerScroll() {
		const headerActive = document.querySelectorAll('.scroll-active-js');

		if (headerActive) {
			window.addEventListener('scroll', function(e) {
				const position = window.scrollY;

				headerActive.forEach(item => {
					if (position > 0) {
						item.classList.add('active');
					}

					if (position <= 0) {
						item.classList.remove('active');
					}
				});
			});
		};
	}

	function scrollTo() {
		const scrollTo = document.querySelectorAll('a.scroll-to-js');

		if (scrollTo) {
				scrollTo.forEach(link => {

				link.addEventListener('click', function(e) {
					e.preventDefault();

					let href = this.getAttribute('href').substring(0);

					const scrollTarget = document.getElementById(href);

					const topOffset = 0;

					const elementPosition = scrollTarget.getBoundingClientRect().top;
					const offsetPosition = elementPosition - topOffset;

					window.scrollBy({
						top: offsetPosition,
						behavior: 'smooth'
					});
				});
			});
		}
	}

	function dinamicInn(dinamicInn, dinamicTo, place, newClassName) {
		const extract = document.querySelector(dinamicInn);

		if (extract) {
			const extractInn = extract.innerHTML;
			const extractTo = document.querySelector(dinamicTo);

			const newElem = document.createElement('div');
			newElem.classList.add(newClassName);
			newElem.innerHTML = extractInn;

			if (place == 'prepend') {
				extractTo.prepend(newElem);
			} else {
				extractTo.append(newElem);
			}
		}
	}

	function tabList() {
		const tabParent = document.querySelector('.topic-parent-js');

		if (tabParent) {
			const tabBtn = document.querySelectorAll('.topic-click-js');
			const tabList = document.querySelectorAll('.topic-list-js');

			function hideTab() {
				tabBtn.forEach(item => {
					item.classList.remove('active');
				});
				tabList.forEach(item => {
					item.classList.remove('active');
				});
			}

			function showTabs (i = 0){
				tabList[i].classList.add('active');
				tabBtn[i].classList.add('active');
			}

			hideTab();
			showTabs();

			tabParent.addEventListener('click', (event) => {
				const target = event.target;
				event.preventDefault();
				if (target && target.classList.contains('topic-click-js')) {
					tabBtn.forEach((item, i) => {
						if (target == item) {
							hideTab();
							showTabs(i);
						}
					});
				}
			});
		}
	}

	function slider1() {
		let mySwiper = new Swiper('.show-container-js', {
		containerModifierClass: 'show-container-js', 
		wrapperClass: 'show-wrapper-js',
		slideClass: 'show-slide-js',
		parallax: true,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		freeMode: false,
		centeredSlides: true,
		simulateTouch: true,
		autoHeight: false,
		speed: 1200,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.show-btn-next-js',
			prevEl: '.show-btn-prev-js',
		},
		
		pagination: {
			el: '.show-pagination-js',
			clickable: true,
		},
		breakpoints: {
			768: {
				spaceBetween: 0,
			}, 
			991: {
				
			},
			1366: {
				simulateTouch: false,
			}
		}
	});

		function autoHeightMath() {
			const maxMediaQuery768 = window.matchMedia('(max-width: 767.98px)');

			const getContainerHeight = document.querySelector('.show-container-js'),
				getSlideActive = getContainerHeight.querySelector('.swiper-slide-active'),
				getContentHeight = getContainerHeight.querySelectorAll('.item-autoheight-js');

				getContainerHeight.style.cssText = `height: ${getSlideActive.firstElementChild.offsetHeight}px;`;

				function autoHeight(item, i) {
					let height = item[i].offsetHeight + 'px';
					getContainerHeight.style.cssText = `height: ${height};`;
				}

				autoHeight(getContentHeight, 0);

			if (getContainerHeight && maxMediaQuery768.matches) {

				mySwiper.autoplay.stop();

				autoHeight(getContentHeight, 1);

				mySwiper.on('slideChange', function () {
					let realIndex = mySwiper.activeIndex;
					autoHeight(getContentHeight, realIndex);
				});
			}
		}

		autoHeightMath();
	}

	function slider2() {
		let init = false;
		let swiper;

		if (window.innerWidth <= 767.98) {
			if (!init) {
				init = true;
				let mySwiper = new Swiper('.product-cont-js', {
					containerModifierClass: 'product-cont-js', 
					wrapperClass: 'product-wrap-js',
					slideClass: 'product-slide-js',
					parallax: false,
					loop: true,
					slidesPerView: 1.25,
					spaceBetween: 15,
					freeMode: false,
					centeredSlides: true,
					simulateTouch: true,
					autoHeight: false,
					navigation: {
						nextEl: '.product-btn-next-js',
						prevEl: '.product-btn-prev-js',
					},
					
					pagination: {
						el: '.product-pagination-js',
						type: "fraction",
					},
					breakpoints: {
						480: {
							slidesPerView: 2.25,
						},
						768: {
							spaceBetween: 20,
							slidesPerView: 'auto',
						},
						1366: {
							
						}
					}
				});
			}
		} else if (init) {
			swiper.destroy();
			init = false;
		}
	}

	function slider3(num) {
		let mySwiper = new Swiper(`.product-${num}-popup-cont-js`, {
			containerModifierClass: `product-${num}-popup-cont-js`, 
			wrapperClass: `product-${num}-popup-wrap-js`,
			slideClass: `product-${num}-popup-slide-js`,
			parallax: false,
			loop: true,
			spaceBetween: 15,
			slidesPerView: 1,
			freeMode: false,
			centeredSlides: true,
			simulateTouch: true,
			autoHeight: false,
			navigation: {
				nextEl: `.product-${num}-popup-btn-next-js`,
				prevEl: `.product-${num}-popup-btn-prev-js`,
			},
			pagination: {
				el: `.product-${num}-popup-pagination-js`,
				type: "fraction",
			},
			breakpoints: {
				768: {
					spaceBetween: 20,
					slidesPerView: 2,
					freeMode: true,
					centeredSlides: false,
				},
				
			}
		});
	}

	function sliderImage() {
		const changeObj = document.querySelector('.change-container-js');
		const picture = document.querySelectorAll('.model-pic-js');

		if(changeObj && picture) {
			changeObj.addEventListener('mouseenter', ()=> {
			changePic();
			});
			changeObj.addEventListener('mouseleave', ()=> {
				backPic();
			});

			function changePic() {
				picture.forEach((item, i) => {
					if (i > 0) {
						setTimeout(() => {
							item.style.cssText = `
									z-index: ${i};
								`;
						}, i * 1000);
					}
				});
			}

			function backPic() {
				picture.forEach((item) => {
					item.style.cssText = `
						z-index: -1;
					`;
				});
			}
		}
	}

	function findMedia() {
		const maxMediaQuery768 = window.matchMedia('(max-width: 767.98px)');

		if (maxMediaQuery768.matches) {
			dinamicInn('.pattern-dinamic-inn-js', '.pattern-dinamic-to-js', 'prepend', 'pattern__dinamic-style-from-js');
			window.addEventListener("load", slider2);
		}
	}

	findMedia();
	sliderImage();
	activeBurger();
	headerScroll();
	scrollTo();
	tabList();
	slider1();
	slider3(1);
	slider3(4);
	slider3(2);
	slider3(3);
	slider3(5);
	slider3(6);
});
