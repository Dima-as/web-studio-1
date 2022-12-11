(() => {
   const refs = {
		mobilOpen: document.querySelector('[data-mobil-open]'),
		mobilClose:document.querySelector('[data-mobil-close]'),
		mobil:document.querySelector('[data-mobil]'),

      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
		body:document.querySelector('body')

	
   };
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);
	refs.mobilOpen.addEventListener('click',toggleMobil);
	refs.mobilClose.addEventListener('click',toggleMobil);


   function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
		refs.body.classList.toggle('body-overflow')
   }
	function toggleMobil() {
      refs.mobil.classList.toggle('is-hidden');
		refs.body.classList.toggle('body-overflow')
   }
	
})();
