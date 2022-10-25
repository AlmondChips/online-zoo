// Pop Up consts
const burderMenu = document.querySelector('.burger-container');
const popUp = document.querySelector('.pop-up');
const popUpBg = document.querySelector('.pop-up-bg');

// Amount Consts
const radios = document.AmountForm.donate;
const amountInput = document.querySelector('.payment')
//Pop up
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

burderMenu.addEventListener('click',showPopUp);
popUp.addEventListener('click', hidePopUp);

// Amount

console.log(radios);

for (let i = 0; i < radios.length; i++) {
	radios[i].addEventListener('click', (event) =>{
		amountInput.value = event.target.value;
	})	
}

amountInput.addEventListener('input', () =>{
	const amountValue = amountInput.value;
	for (let i = 0; i < radios.length; i++) {
		if(radios[i].value === amountValue){
			radios[i].checked = true
			break;
		} 
		else if(radios[i].value != amountValue){
			radios[radios.length-1].checked = true;
		}	

	}
	

	if(amountInput.value.length > 4) amountInput.value = amountInput.value.substring(0,4);
	if(amountInput.value < 0) amountInput.value = 0;
	
})

// Invocations
amountInput.value = 100;
radios[radios.length-4].checked = true;
