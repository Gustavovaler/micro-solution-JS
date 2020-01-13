

//This function gets 2 parameters. The first is the element you want to show or hide.
// the second is opcional and  gives us the possibilty of delaying this action in miliseconds.

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
		function hide(element){

				setTimeout(function(){element.style.display = "none";},time);
			}
		function show(element){
				setTimeout(function(){element.style.display = "block";},time);
			}	
	}

	//use example:

//	<script src="toggle_display_element.js"></script>

//		<button onclick="toggle(element)">Show or hide</button>

//		<div id="some_div">

//			<p> Content what you want toggle</p>

//   		<span> More content</span>
//		</div>

//	<script >

//	var element = document.getElementById('some_div');

//	</script>

// -------------- 
// Another way:

//	<script src="toggle_display_element.js"></script>
//	<span id="trigger">Click me for Show or hide</span>

//	<div id="some_div">
//		<p> Content what you want toggle</p>
//    	<span> More content</span>
//	</div>

//	<script >
//		var element = document.getElementById('some_div');
//		var trigger = document.getElementById('trigger');
//		trigger.addEventListener("click", function(){
//		toggle(element);
//		});
//	</script>