const input = document.querySelectorAll('.input')

emailControl.onchange = function (e){
	const text = e.target.value.toString()
	let length = text.length
    if(length >= 3){
		input[0].style.borderColor = "green"
	}
}

passwordControl.onchange = function (p){
	const pass = p.target.value.toString()
	let lengthPass = pass.length
    if(lengthPass >= 3){
		input[1].style.borderColor = "green"
	}
}

function show_hide_password(target){
	if (passwordControl.getAttribute('type') == 'password') {
		target.classList.add('view');
		passwordControl.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		passwordControl.setAttribute('type', 'password');
	}
	return false;
}