(() => {
   const refs = {
		mobilOpen: document.querySelector('[data-mobil-open]'),
		mobilClose:document.querySelector('[data-mobil-close]'),
		mobil:document.querySelector('[data-mobil]'),
		body:document.querySelector('body'),
		cardsModalOpen:document.querySelector('[data-cards-open]'),
		cardsModalClose:document.querySelector('[data-cards-close]'),
		cardsModal:document.querySelector('[data-cards]')

	
   };
	refs.mobilOpen.addEventListener('click',toggleMobil);
	refs.mobilClose.addEventListener('click',toggleMobil);
	refs.cardsModalOpen.addEventListener('click',toggleCards);
	refs.cardsModalClose.addEventListener('click',toggleCards)

	function toggleMobil() {
      refs.mobil.classList.toggle('is-hidden');
		refs.body.classList.toggle('body-overflow')
   }
	function toggleCards(){
		refs.cardsModal.classList.toggle('is-hidden')
		refs.body.classList.toggle('body-overflow')
	}
	
})();
