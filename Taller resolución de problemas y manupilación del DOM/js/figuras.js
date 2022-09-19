
//triangulo
let areat=document.getElementById('areat')
areat.addEventListener('click',()=>{
    let area1=document.getElementById('area1').value
    let area2=document.getElementById('area2').value
    
    let total=(parseFloat(area1*area2)/2)
    alert("El área es " + total)           
})

let perimetrot=document.getElementById('perit')
perimetrot.addEventListener('click',()=>{
    
    let lado1=document.getElementById('l1').value
    lado1=parseFloat(lado1)
    let lado2=document.getElementById('l2').value
    lado2=parseFloat(lado2)
    let lado3=document.getElementById('l3').value
    lado3=parseFloat(lado3)
    
    let suma = lado1+lado2+lado3
    alert("El perimetro es: " + suma)          
})
//rectangulo
let arearec=document.getElementById('arearec')
arearec.addEventListener('click',()=>{
    let arearec1=document.getElementById('arearec1').value
    let arearec2=document.getElementById('arearec2').value
    
    let total=(parseFloat((arearec1)*(arearec2)))
    alert("El área es " + total)           
})

let perirec=document.getElementById('perirec')
perirec.addEventListener('click',()=>{
 
    let ladosr1=document.getElementById('la1r').value
    ladosr1=parseFloat(ladosr1)
    let ladosr2=document.getElementById('la2r').value
    ladosr2=parseFloat(ladosr2)

    let total= 2*ladosr1+ladosr2
    alert("El perimetro es: " + total)          
})


//cuadrado
let areac=document.getElementById('areac')
areac.addEventListener('click',()=>{
    let areac1=document.getElementById('areac1').value
    let areac2=document.getElementById('areac2').value
    
    let total=(parseFloat((areac1)*(areac2)))
    alert("El área es " + total)           
})

let perimetroc=document.getElementById('peric')
perimetroc.addEventListener('click',()=>{
 
    let lados1=document.getElementById('la1').value
    lados1=parseFloat(lados1)
    let lados2=document.getElementById('la2').value
    lados2=parseFloat(lados2)
    let lados3=document.getElementById('la3').value
    lados3=parseFloat(lados3)
    let lados4=document.getElementById('la4').value
    lados4=parseFloat(lados4)

    let total=lados1+lados2+lados3+lados4
    alert("El perimetro es: " + total)          
})

//circulo
let areaci=document.getElementById('areaci')
areaci.addEventListener('click',()=>{
    const pi=3.14
    let radio=document.getElementById('radio').value
    
    
    let total=(parseFloat((pi*radio)*radio))
    alert( "El área es " + total)           
})

let pericir=document.getElementById('pericir')
pericir.addEventListener('click',()=>{
    
    let radio1=document.getElementById('perimetro').value
    radio1=parseFloat(radio1)

    let perimetro = 2*3.14*radio1
    alert("El perimetro es: " + perimetro)          
})


