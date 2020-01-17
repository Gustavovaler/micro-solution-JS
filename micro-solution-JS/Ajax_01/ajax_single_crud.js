	





var consultDb = function (petition, url,element){

	var conexion_ajax = new XMLHttpRequest();

	conexion_ajax.onreadystatechange = function(){
		
			if (this.readyState == 4 && this.status == 200) {
				element.innerHTML = this.responseText;
			}
		}
		conexion_ajax.open(petition,url,true);
		conexion_ajax.send();
	}