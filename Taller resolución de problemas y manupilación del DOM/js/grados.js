let boton = document.getElementById('boton')
boton.addEventListener('click',()=>{

let ingresar = document.getElementById('1').value
let lista1 = document.getElementById('lista1').value
let lista2 = document.getElementById('lista2').value

if (lista1 == 'list1' && lista2 == 'list5'){
    let resultado = (parseFloat(ingresar)*1.8)+32
    alert(resultado)
}

else if(lista1 == 'list1' && lista2 == 'list6'){
    let resultado = (parseFloat(ingresar)+273.15)
    alert(resultado)
}

else if(lista1 == 'list2' && lista2 == 'list4'){
    let resultado = (parseFloat(ingresar)-32)*(5/9)
    alert(resultado)
}

else if(lista1 == 'list2' && lista2 == 'list6'){
    let resultado = (parseFloat(ingresar)-32)*(5/9)+273.15
    alert(resultado)
}

else if(lista1 == 'list3' && lista2 == 'list4'){
    let resultado = (parseFloat(ingresar)-273.15)
    alert(resultado)
}

else if(lista1 == 'list3' && lista2 == 'list5'){
    let resultado = (parseFloat(ingresar)-273.15)*(9/5)+32
    alert(resultado)
}

else if(lista1 == 'list1' && lista2 == 'list4'){
    alert("ERROR")
}
else if(lista1 == 'list2' && lista2 == 'list5'){
    alert("ERROR")
}
else if(lista1 == 'list3' && lista2 == 'list6'){
    alert("ERROR")
}

})