

//---------------------------#1 calcular cuantas letras tiene el nombre que se ingrese--------------------------------------
function saludo(){

    //aqui le estamos diciendo que busque en todo el documento los elementos que tengan el 
    //id nombre y luego para extraer los elementos se pone el .value

    let nombre = document.getElementById('nombre').value
    
    function calcular(nombre){
        let cantidad=nombre.length
        alert("su nombre tiene "+cantidad+ " letras")
    }
    calcular(nombre)
}

//---------------------------#2 cambiar de minusculas a mayusculas--------------------------------------
function validar(){
    let nombre1=document.getElementById('nombre1').value
    
   function procesar(nombre1){
            let cantidad=nombre1.length
            let nombre_mayusculas=nombre1.toUpperCase()
            alert(nombre_mayusculas)
        }
        procesar(nombre1) 
}

//---------------------------#3 cambiar de mayusculas a minusculas--------------------------------------
function validar2(){
    let nombre2=document.getElementById('nombre2').value
    
   function procesar(nombre2){
            let cantidad=nombre2.length
            let nombre_minusculas=nombre2.toLowerCase()
            alert(nombre_minusculas)
        }
        procesar(nombre2) 
}


