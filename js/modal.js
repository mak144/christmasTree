let buttonsOrder = document.querySelectorAll('.product__button-order');
let overlayOrder = document.querySelector('.overlay_order');
let order = overlayOrder.querySelector('.modal__order');

buttonsOrder.forEach(buttonOrder => {
   buttonOrder.addEventListener('click', () => {
      overlayOrder.classList.add('overlay_active');
      order.value = buttonOrder.dataset.order;
   })
});

overlayOrder.addEventListener('click', (event) => {
   let target = event.target;
   if (target === overlayOrder || target.closest('.modal__close')) {
      overlayOrder.classList.remove('overlay_active')
   }

})