(() => {
   const refs = {
		mobilOpen: document.querySelector('[data-mobil-open]'),
		mobilClose:document.querySelector('[data-mobil-close]'),
		mobil:document.querySelector('[data-mobil]'),
		body:document.querySelector('body')

	
   };
	refs.mobilOpen.addEventListener('click',toggleMobil);
	refs.mobilClose.addEventListener('click',toggleMobil);

	function toggleMobil() {
      refs.mobil.classList.toggle('is-hidden');
		refs.body.classList.toggle('body-overflow')
   }
	
})();
