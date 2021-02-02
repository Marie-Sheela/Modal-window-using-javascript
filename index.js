'use strict';

const showBtns = document.querySelectorAll('.show');
const modalWindow = document.querySelector('.modal');
const overlayWindow = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

console.log(showBtns);

showBtns.forEach(btn => btn.addEventListener('click', function(){
showModal();
}));

closeBtn.addEventListener('click',function(){
    closeModal();
});

document.addEventListener('keydown',function(e){
    e.key === 'Escape'  && !modalWindow.classList.contains('hidden') && closeModal();
});

overlayWindow.addEventListener('click',function(e){
e.preventDefault();
if(!overlayWindow.classList.contains('hidden')){
    closeModal();
}
});


const showModal = function (){
modalWindow.classList.remove('hidden');
overlayWindow.classList.remove('hidden');
}


const closeModal = function (){
    modalWindow.classList.add('hidden');
    overlayWindow.classList.add('hidden');
    }

