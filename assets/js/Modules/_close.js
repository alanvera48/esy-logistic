export function ClosePop () {
	let d = document;
	let $popup = d.querySelector('.popup');
	let $closeButton = d.querySelector('.close');


	$closeButton.addEventListener('click', e =>{
		$popup.classList.add('none');
	})
	
}
