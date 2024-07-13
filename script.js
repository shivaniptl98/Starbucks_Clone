const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('hidden');
});

const footerItem = document.querySelectorAll('.footer-item');
const footerLink = document.querySelectorAll('.footer-link');

for (let i =0; i < footerItem.length; i++){
    footerItem[i].addEventListener('click',() =>{
        footerItem[i].classList.toggle('active');
        footerLink[i].classList.toggle('active');
    });
};