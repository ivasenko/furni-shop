var cart = document.getElementsByClassName('cart')[0];
var cartModal = document.getElementsByClassName('cart__modal')[0];
var btnClose = document.getElementsByClassName('del')[0];

cart.onclick = function () {
    cartModal.style.display = 'block';
};
btnClose.onclick = function () {
    cartModal.style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
};
