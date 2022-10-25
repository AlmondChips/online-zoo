// PopUpConsts
const burderMenu = document.querySelector('.burger-container');
const popUp = document.querySelector('.pop-up');
const popUpBg = document.querySelector('.pop-up-bg');

// SliderConsts
const SliderBtnRight = document.querySelector('.btn-scrollRight');
const SliderBtnLeft = document.querySelector('.btn-scrollLeft');
const SliderWindow = document.querySelector('.overflow');
const PetCards = document.querySelector('.CARDS').children;


// PopUp
function showPopUp(){
	popUp.classList.toggle('hidden')
	setTimeout(() =>{
		popUp.classList.toggle('pop-up-active');
		popUpBg.classList.toggle('pop-up-bg-active');
	},100);	
}

function hidePopUp(event){
	if(event.target.classList.contains('pop-up') || event.target.classList.contains('pop-up-cross')){
		popUp.classList.toggle('pop-up-active');
		popUpBg.classList.toggle('pop-up-bg-active')
		setTimeout(() =>{popUp.classList.toggle('hidden');},300);
	}
}

// Slider
function slideLeft(){
	const PetGrids = document.querySelectorAll('.petsGrid');
	fillPetBlock(PetGrids[0]);
	SliderWindow.classList.add('AnimationSlideLeft');
	SliderBtnLeft.removeEventListener('click',slideLeft);
	SliderBtnRight.removeEventListener('click',slideRight);
}

function slideRight(){
	const PetGrids = document.querySelectorAll('.petsGrid');
	fillPetBlock(PetGrids[2]);
	SliderWindow.classList.add('AnimationSlideRight');
	SliderBtnLeft.removeEventListener('click',slideLeft);
	SliderBtnRight.removeEventListener('click',slideRight);
}

SliderWindow.addEventListener('animationend', () =>{
	 if(SliderWindow.classList.contains('AnimationSlideLeft')){
		SliderWindow.classList.remove('AnimationSlideLeft');
		let CardsBlock = document.querySelectorAll('.petsGrid');
		SliderWindow.insertBefore(CardsBlock[CardsBlock.length-1],CardsBlock[0]);
	 }

	 if(SliderWindow.classList.contains('AnimationSlideRight')){
		SliderWindow.classList.remove('AnimationSlideRight');
		let CardsBlock = document.querySelectorAll('.petsGrid');
		SliderWindow.appendChild(CardsBlock[0]);
	 }

	 SliderBtnLeft.addEventListener('click',slideLeft);
	 SliderBtnRight.addEventListener('click',slideRight);
});

//Cards generation
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function fillPetBlock(block){
// Clears whole block
block.textContent='';
// Fills by unique cards
for (let index = 0; index < 6;) {
		const randomNum = getRandomInt(0, 12);
		
		if (!PetCards[randomNum].classList.contains('taken')) {
			block.appendChild(PetCards[randomNum].cloneNode(true));
			// Marks used card
			PetCards[randomNum].classList.add('taken');
			index++
		}
	}

	// Clears marking
	for (let i = 0; i < PetCards.length; i++) {
		if (PetCards[i].classList.contains('taken')) 
		PetCards[i].classList.remove('taken');		
	}
}

// Testimonials slider
const comments = document.querySelector('.comments-grid');
const inputRange = document.querySelector('.slider');
let TranslateValue = -25.571428571428;

if(window.innerWidth <= 1332){
	TranslateValue = -34;
}
comments.style.transform = `translateX(${inputRange.value*TranslateValue}%)`;
let prevTranslate = comments.style.transform;
let currentTranslate ='';


inputRange.addEventListener('input', () =>{
	currentTranslate = `${inputRange.value*TranslateValue}`;
	prevTranslate = comments.style.transform;

		const sliderSLideKeyFrames = [
			{transform: prevTranslate},
			{transform: `translateX(${currentTranslate}%)`}
		]
		
	comments.animate(sliderSLideKeyFrames,400)

	comments.style.transform = `translateX(${currentTranslate}%)`;
});

window.addEventListener('resize',() =>{
	if(window.innerWidth <= 1332){
		TranslateValue = -34;
	}
	else if (window.innerWidth >= 1332){
		TranslateValue = -25.571428571428;
	}

	inputRange.value = 0;
	prevTranslate = 'translateX(0%)';
	comments.style.transform = 'translateX(0%)';
})

// Testiomonials pop-up
const commentsList = document.querySelectorAll('.comment-card');
const shading = document.querySelector('.shading')
const crossPrototype = document.querySelector('.pop-up-cross').cloneNode(true);

for (let index = 0; index < commentsList.length; index++) {
	commentsList[index].addEventListener('click', (event) =>{
		if(window.innerWidth < 980){
			
			shading.firstElementChild.appendChild(event.currentTarget.cloneNode(true));
			shading.firstElementChild.classList.remove('wrap')
			event.currentTarget.classList.add();
			shading.classList.add('display-flex')

			shading.firstElementChild.firstElementChild.insertBefore(crossPrototype,shading.firstElementChild.firstElementChild.children[0]);
		} 
	});	
}

shading.addEventListener('click', (event) =>{
	if(event.target.classList.contains('shading')){
		shading.children[0].textContent = '';
		shading.classList.toggle('display-flex');
	}

})

crossPrototype.addEventListener('click', () => {
	shading.children[0].textContent = '';
	shading.classList.toggle('display-flex');
})





// Invocations 
burderMenu.addEventListener('click',showPopUp);
popUp.addEventListener('click', hidePopUp);
SliderBtnLeft.addEventListener('click',slideLeft);
SliderBtnRight.addEventListener('click',slideRight);
fillPetBlock((document.querySelectorAll('.petsGrid'))[1]); 
