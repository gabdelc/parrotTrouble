function parrot1()
{
	var img1 = document.getElementById("img_parrot");
	var pajaro = document.getElementById("parrotTalk");

	if(pajaro.checked)
		img1.innerHTML = '<img src="img/sing.png">';
	else
		img1.innerHTML = '<img src="img/mudo.png">';
}

function evaluar(){
    var horario = parseFloat(document.getElementById("hora").value);
    var pajaro = document.getElementById("parrotTalk");
    var pajaroTalk = true;
	var salida = document.getElementById("salida");

	if(pajaroTalk == true && horario < 7 || horario >20 ){
        salida.innerHTML = "1";
        }else{
		salida.innerHTML = "0";
	   }
   }