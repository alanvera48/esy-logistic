import {Toggle} from './Modules/_toggle.js';
import {ToggleAppear} from './Modules/_toggle-appear.js';
import {ContactForm} from './Modules/_form.js';
import {ClosePop} from './Modules/_close.js';


const d = document;

function CloseFound () {
	const $itemclose = d.querySelector('.close');
	if(!$itemclose || $itemclose == null){
		return
	}else{
		ClosePop();
	}
}

d.addEventListener('DOMContentLoaded', e=>{	
	ToggleAppear('.toggle','.header-nav-ul');
	CloseFound();
	ContactForm();
	d.addEventListener('scroll', (e)=>{
		Toggle('home');
	})
	
})


