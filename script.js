var valor=document.querySelector("main.container input");
var taboada=document.querySelector("main.container section.taboada");
const calcular=document.querySelector("main.container section.block button");
calcular.addEventListener("click",()=>{
    taboada.innerHTML=""
    if(Number(valor.value)<1||Number(valor.value)>100){
        
        taboada.innerHTML="Insira um valor no intervalor de 1 a 100 "
    }else{
        for(i=1;i<=20;i++){
        var calc=String(i) +" x " + valor.value + " = " + i * Number(valor.value);
        var resultado=document.createElement("p");
        resultado.innerHTML=calc;
        taboada.appendChild(resultado);
        }
        
    }
})