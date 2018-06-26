;var sgApp = (function(){
	var callMeBtn = document.getElementById('callMe');
	var modalWindow = document.getElementById('modal');
	var conatctBlock = document.querySelector('.contact');
	console.log(modalWindow)
	var showModalWindow = function(){
		console.log('клик')
		modalWindow.classList.toggle('animated');
		modalWindow.classList.toggle('fadeInRight');
		conatctBlock.classList.toggle('variable-flex');
	}



	callMeBtn.addEventListener('click',showModalWindow );
})();