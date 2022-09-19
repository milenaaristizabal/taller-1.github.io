

let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{

let nombre = document.getElementById('1').value
let apellido = document.getElementById('2').value
let actividad = document.getElementById('3').value

if (nombre == 'instr1' && apellido == 'instr13' && actividad == 'instr21'){
    alert("Felicidades tu respuesta es correcta");
}

else if(nombre == "instr2" && apellido == "instr8" && actividad == "instr19"){
    alert("Felicidades tu respuesta es correcta ");
}

else if(nombre == "instr3" && apellido == "instr15" && actividad == "instr16"){
    alert("Felicidades tu respuesta es correcta ");
}
else if(nombre == "instr4" && apellido == "instr14" && actividad == "instr22"){
    alert("Felicidades tu respuesta es correcta ");
}
else if(nombre == "instr5" && apellido == "instr12" && actividad == "instr18"){
    alert("Felicidades tu respuesta es correcta ");
}
else if(nombre == "instr6" && apellido == "instr11" && actividad == "instr17"){
    alert("Felicidades tu respuesta es correcta ");
}
else if(nombre == "instr7" && apellido == "instr10" && actividad == "instr20"){
    alert("Felicidades tu respuesta es correcta ");
}
else{
    alert(":( Tu respuesta es incorrecta")
}

})

