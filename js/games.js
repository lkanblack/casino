let startPlaying_btn = document.querySelector('.start-btn');
let modal = document.querySelector('.games');
let close_btn = document.querySelector('.close');
let overlayModal = document.querySelector('.overlay');

startPlaying_btn.addEventListener('click', function(){
    overlayModal.style.display = "block";
    modal.style.display = "block";
});
close_btn.addEventListener('click', function(){
    overlayModal.style.display = "none";
    modal.style.display = "none";
});

