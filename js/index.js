(() => {
   const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
		body:document.querySelector('body')
	
   };
     console.log(refs.body);
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);

   function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
		refs.body.classList.toggle('body-overflow')
   }
})();

//  let item =''
// filter.forEach(element => {
// 	item=element
	
// });
// console.log(item);