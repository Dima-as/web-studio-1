(() => {
   const refs = {
		mobilOpen: document.querySelector('[data-mobil-open]'),
		mobilClose:document.querySelector('[data-mobil-close]'),
		mobil:document.querySelector('[data-mobil]'),
		body:document.querySelector('body'),
		cardsModalOpen:document.querySelectorAll('.cards-container'),
		cardsModalClose:document.querySelector('[data-cards-close]'),
		cardsModal:document.querySelector('[data-cards]'),
		cardsItem:document.querySelectorAll('.cards-img'),
		cardsImg:document.querySelector('.cards-modal-img')

   };

	const {mobilOpen,mobilClose,mobil,body,cardsModalOpen,cardsModalClose,cardsModal,cardsItem,cardsImg} = refs
	
	const cardsList=[
		{src:"./images/mob/cards1-2x.jpg",alt:"notebook"},
		{src:"./images/mob/cards2-2x.jpg",alt:"basketball"},
		{src:"./images/mob/cards3-2x.jpg",alt:"logo"},
		{src:"./images/mob/cards4-2x.jpg",alt:"headphones"},
		{src:"./images/mob/cards5-2x.jpg",alt:"boxes"},
		{src:"./images/mob/cards6-2x.jpg",alt:"monitor"},
		{src:"./images/mob/cards7-2x.jpg",alt:"magazine"},
		{src:"./images/mob/cards8-2x.jpg",alt:"tag"},
		{src:"./images/mob/cards9-2x.jpg",alt:"computer"}
	]

	mobilOpen.addEventListener('click',toggleMobil);
	mobilClose.addEventListener('click',toggleMobil);
	cardsModalClose.addEventListener('click',toggleCards)
	cardsModalOpen.forEach(el => {
		el.addEventListener('click',toggleCards)
	})
	
	cardsItem.forEach(el => {
		el.addEventListener('click',cardSwitch)
	})

	function toggleMobil() {
      mobil.classList.toggle('is-hidden');
		body.classList.toggle('body-overflow')
   }

	function toggleCards(){
		cardsModal.classList.toggle('is-hidden')
		body.classList.toggle('body-overflow')
	}

	function cardSwitch(event){
		let e =event.currentTarget.alt
		let arr = []
		
		for (let i = 0; i < cardsList.length; i+=1) {
			if(e === cardsList[i].alt){
				arr=cardsList[i]
				cardsImg.src=arr.src
				cardsImg.alt=arr.alt
			}	
		}
	}
	
})();
