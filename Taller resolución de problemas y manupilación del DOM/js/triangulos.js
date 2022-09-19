let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{
    
let lado1 = document.getElementById('1').value
let lado2 = document.getElementById('2').value
let lado3 = document.getElementById('3').value

if (lado1 == lado2 && lado1 == lado3){
    alert("Es un  triangulo equilátero \n Los lados que digitó fueron : " +lado1+ ", "+lado2+ ", " +lado3);
}

else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    alert("Es un  triangulo isósceles \n Los lados que digitó fueron : " +lado1+ ", "+lado2+ ", " +lado3);
}

else {
    alert("Es un  triangulo escaleno \n Los lados que digitó fueron : " +lado1+ ", "+lado2+ ", " +lado3);
}
})