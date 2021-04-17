export function ContactForm(){
	const d = document;
	const $input = d.querySelectorAll('.contact-form [required]');
	const $form = d.querySelector('.contact-form');

	$input.forEach((input)=>{
		const $span = d.createElement('span');
		$span.id = input.name;
		$span.textContent = input.title;
		$span.classList.add('active-span','none');

		input.insertAdjacentElement("afterend", $span);

	});

	d.addEventListener('keyup', (e)=>{ 
		 if(e.target.matches('.contact-form [required]')){
		 	let $input = e.target;
		 	const pattern = $input.pattern || $input.dataset.pattern;

		 	if(pattern && $input.value!==""){
		 		
		 		let regex = new RegExp(pattern);
		 		return !regex.exec($input.value)
		 			? d.getElementById($input.name).classList.remove('none')
		 			: d.getElementById($input.name).classList.add('none');
		 	}


		 }
		})

	d.addEventListener('submit', (e)=>{
		e.preventDefault();
		const $loader = d.querySelector('.contact-form-loader');
		const $response = d.querySelector('.contact-form-response');
		const $popup = d.querySelector('.popup');

		$loader.classList.remove('none');


		fetch("https://formsubmit.co/ajax/alanvera48@gmail.com",{
			method: "POST",
			body: new FormData(e.target)
		})
		.then(res=>res.ok 
			? res.json()
			: Promise.reject(res))
		
		.then((json)=>{
			$loader.classList.add('none');
			$popup.classList.remove('none');
			$form.reset();
			console.log(json)
		})
		.catch((err)=>{
			console.log(err);
			let message = err.statusText || "Ocurrio un error";
			$response.innerHTML = `<p> Error ${err.status} : ${message}</p>`
		})
		.finally(()=>{
			setTimeout(()=>{
				$response.classList.add('none');
				$response.innerHTML = "";
		}, 3000)
		})
	})

}
