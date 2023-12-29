const buttonsOrder = document.querySelectorAll('.product__button_order')
const overlayOrder = document.querySelector('.overlay_order')
const order = document.querySelector('.modal__order')

buttonsOrder.forEach((button) => {
  button.addEventListener('click', (e)=>{
    overlayOrder.classList.add('overlay_active')
    order.value = button.dataset.order
  })
})

overlayOrder.addEventListener('click', (e)=>{
  if(e.target === overlayOrder || e.target.closest('.modal__close')){
    overlayOrder.classList.remove('overlay_active')
  }
})

// ========================
const headerConsultation = document.querySelector('.header__consultation')
const overlayConsultation = document.querySelector('.overlay_consultation')

headerConsultation.addEventListener('click', (e)=>{
  overlayConsultation.classList.add('overlay_active')
})
overlayConsultation.addEventListener('click', (e)=>{
  if(e.target === overlayConsultation || e.target.closest('.modal__close')){
    overlayConsultation.classList.remove('overlay_active')
  }
})
