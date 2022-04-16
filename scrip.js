let popuBg = document.querySelector('.pop-bg');
let popup = document.querySelector('.popup');
let openPopubButtons = document.querySelectorAll('.open-click');
let closePopubButtons = document.querySelector('.close-popup')



openPopubButtons.forEach((button) => {
button.addEventListener('click', (e) => {
    e.preventDefault();
    popuBg.classList.add('active');
    popup.classList.add('active');
})
});

closePopubButtons.addEventListener('click',() => {
    popuBg.classList.remove('active')
    popup.classList.remove('active')

});

document.addEventListener('click',(e) => {
    if(e.target === popuBg) {
        
    popuBg.classList.remove('active')
    popup.classList.remove('active')

    }
});