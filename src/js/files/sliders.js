/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.main__swiper')) {
		new Swiper('.main__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			effect: 'fade',
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider__bullets',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.main-slider__arrows .main-slider__arrow-next',
				prevEl: '.main-slider__arrows .main-slider__arrow-prev',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});
	}

	if (document.querySelector('.stars__swiper')) {
		new Swiper('.stars__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 2.5,
			slidesPerGroup: 2,
			spaceBetween: 20,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.slider-slider__bullets',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.stars-slider__arrows .stars-slider__arrow-next',
				prevEl: '.stars-slider__arrows .stars-slider__arrow-prev',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				668: {
					slidesPerView: 2.2,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				992: {
					slidesPerView: 2.5,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
			},

			on: {

			}
		});
	}

	if (document.querySelector('.articles__swiper')) {
		new Swiper('.articles__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			slidesPerGroup: 2,
			spaceBetween: 50,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.slider-slider__bullets',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.stars-slider__arrows .articles-slider__arrow-next',
				prevEl: '.stars-slider__arrows .articles-slider__arrow-prev',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
					slidesPerGroup: 1,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 50,
					slidesPerGroup: 1,
				},
			},

			on: {

			}
		});
	}

	if (document.querySelector('.reviews__swiper')) {
		new Swiper('.reviews__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 50,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.slider-slider__bullets',
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: '.reviews-slider__arrows .reviews-slider__arrow-next',
				prevEl: '.reviews-slider__arrows .reviews-slider__arrow-prev',
			},

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},

				992: {
					slidesPerView: 1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				1200: {
					slidesPerView: 1,
					spaceBetween: 30,
					slidesPerGroup: 1,
				},
			},

			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});