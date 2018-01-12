var cart = document.getElementsByClassName('cart')[0];
var cartModal = document.getElementsByClassName('cart__modal')[0];
var btnClose = document.getElementsByClassName('del')[0];

cart.addEventListener('click', function(){
    cartModal.style.display = (cartModal.style.display === 'none') ? 'block' : 'none';
});