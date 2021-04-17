export function ToggleAppear (toggle, nav) {
	let d = document;
	let $toggle = d.querySelector(toggle);
	let $nav = d.querySelector(nav);

	$toggle.addEventListener('click', e =>{
		$nav.classList.toggle('active');	
	})
}
