var span=document.querySelector("#span-mas");
var btn_mas = document.querySelector(".boton-mas");
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

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
     a = 0;
     b = 1;
    for (i = 2; i <= n; i++) {
      temp = a;
      a = b;
      b += temp;
    }
    return b;
  }
    console.log(fibonacci(12));