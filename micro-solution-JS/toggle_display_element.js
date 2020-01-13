



function toggle(e,time = 0){
	let element = window.getComputedStyle(e);
	let elementVisibility = element.getPropertyValue('display');
	let elementStyleVisibility = e.style.visibility;
	let elementStyleDisplay = e.style.display;

	if (elementVisibility === 'none' || elementStyleVisibility === 'hidden' || elementStyleDisplay === 'none') {
		show(e);
		return
	}else if (elementVisibility === 'block' || elementStyleVisibility === 'visible' || elementStyleDisplay === 'block') {
		hide(e);
		}
		function hide(elemento){

				setTimeout(function(){elemento.style.display = "none";},time);
			}
		function show(elemento){
				setTimeout(function(){elemento.style.display = "block";},time);
			}	
	}