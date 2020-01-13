	





var consultarDb = function (peticion, url,elemento){

	var conexion_ajax = new XMLHttpRequest();

	conexion_ajax.onreadystatechange = function(){
		
			if (this.readyState == 4 && this.status == 200) {
				elemento.innerHTML = this.responseText;
			}
		}
		conexion_ajax.open(peticion,url,true);
		conexion_ajax.send();
	}