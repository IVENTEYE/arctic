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

const paralaxAreas = document.querySelectorAll('.paralax-area');

let isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};

if (!isMobile.any()) {
	if (paralaxAreas.length > 0) {
		for (paralaxArea of paralaxAreas) {
			const paralaxItem = document.querySelectorAll('.paralax-item');
			paralaxArea.addEventListener('mousemove', (e) => {
				const x = e.pageX / window.innerWidth,
				y = e.pageY / window.innerHeight;
				paralaxItem.forEach( item => {
					item.style.transform =  'translate(-' + x * 12 + 'px, -' + y * 12 + 'px)';
				});
			});
			paralaxArea.addEventListener('mouseenter', (e) => {
				paralaxItem.forEach( item => {
					item.style.transition =  'none';
				});
			});
			paralaxArea.addEventListener('mouseleave', (e) => {
				paralaxItem.forEach( item => {
					item.style.transform =  'translate(0,0)';
					item.style.transition =  'all 0.3s ease-in-out';
				});
			});
		}
	}
}
	  	  

