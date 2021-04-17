export function Toggle (header) {
	let d = document;
	let $header = d.getElementById(header);
	let scroll = d.documentElement.scrollTop;
	let $headerHigh = $header.offsetTop;

		if(scroll > $headerHigh + 80){
			$header.style.opacity = 0
		}else{
			$header.style.opacity = 1
		}
}


