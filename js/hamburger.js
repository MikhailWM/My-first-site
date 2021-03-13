// window.addEventListener('DOMContentLoaded', () => {
// 	const menu = document.querySelector('.subheader'),
// 		menuItem = document.querySelectorAll('.subheader__submenu'),
// 		hamburger = document.querySelector('.hamburger');

// 	hamburger.addEventListener('click', () => {
// 		hamburger.classList.toggle('hamburger_active');
// 		menu.classList.toggle('subheader_active');
// 	});

// 	menuItem.forEach(item => {
// 		item.addEventListener('click', () => {
// 			hamburger.classList.toggle('hamburger_active');
// 			menu.classList.toggle('subheader_active');
// 		})
// 	})
// })

$(document).ready(function() {
    $('.subheader__hamburger').click(function() {
        $('.subheader__hamburger').toggleClass('open-submenu');
    });
});