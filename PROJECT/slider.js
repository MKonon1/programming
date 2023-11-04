// const swiper = new swiper('.swiper', {
// 	// Optional parameters
// 	// loop: true,
// 	autoplay: {
// 		delay: 2500,
// 		// 	  залежить від scroll-bar'у
// 	},

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

const swiper = new Swiper('.swiper', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
