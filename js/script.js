const headerScroll = () => {
    const header = document.querySelector('.header');
	if (window.pageYOffset > 80) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
};

window.addEventListener('scroll', headerScroll);

const menu = document.querySelector('.menu-burger'),
      menuBody = document.querySelector('.menu__body');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBody.classList.toggle('active');
});