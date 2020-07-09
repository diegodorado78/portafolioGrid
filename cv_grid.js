//TOGGLE PARRAFO POST1
var span = document.querySelector("#span-mas");
var btn_mas = document.querySelector("#boton-mas");
btn_mas.textContent="Leer más";//textContent para agregar texto

btn_mas.addEventListener("click",function(){
 if (span.style.display==="none"){//element.Style para cambiar estilos
     span.style.display= "grid";
     btn_mas.textContent="Leer menos";
 }else{
    span.style.display="none";
    btn_mas.textContent="Leer más";
 }
});
//TOGGLE MENU RESPONSIVE
$(document).ready(main);
function main() {
  $('.nav-bar').css('display', 'none');
	$('.toggle_menu').click(function(){
		 $('.nav-bar').toggle(); 
	});
}
