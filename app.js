/*
let name="herol kleiber";
let lastname="huamani noñonca";
let country="Peru";

let age=26;
let phonenumber=992911553;
let homephone=21321312321;

let obj1={
    name : "key",
    amount: 1
};
let obj2={
    name : "phone",
    amount: 5
};
let obj3={
    name: "headphones",
    amount: 10
};

let array_user=[["fabio"      ,  12344   ],
                ["alejhandro" ,  12321312],
                ["francisco"  ,  21321   ]];
let idat;
let x=null;

console.log("Nombre:",name,lastname," - Ciudad :",country);
console.log("edad:", age, "numero celular:",phonenumber, "telefono fijo:", homephone);
console.log(typeof(obj1));
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(array_user);
console.log(typeof(idat));
console.log(typeof(x));*/


function sumar(){
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let numero3 = document.getElementById("numero3");
    
    const numer1=Number(numero1.value);
    const numer2=Number(numero2.value);
    const numer3=Number(numero3.value);
 
    let suma = numer1 + numer2 + numer3 ;
 
   document.getElementById("resul").value=suma;
   }
   function restar(){
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let numero3 = document.getElementById("numero3");
    
    const numer1=Number(numero1.value);
    const numer2=Number(numero2.value);
    const numer3=Number(numero3.value);
 
    let resta = numer1 - numer2 - numer3 ;
 
   document.getElementById("resul").value=resta;
   }
   function multiplicar(){
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let numero3 = document.getElementById("numero3");
    
    const numer1=Number(numero1.value);
    const numer2=Number(numero2.value);
    const numer3=Number(numero3.value);
 
    let multiplicacion= numer1 * numer2 * numer3 ;
 
   document.getElementById("resul").value=multiplicacion;
   }
   function dividir(){
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let numero3 = document.getElementById("numero3");
    
    const numer1=Number(numero1.value);
    const numer2=Number(numero2.value);
    const numer3=Number(numero3.value);
 
    let dividir = numer1 / numer2 / numer3 ;
 
   document.getElementById("resul").value=dividir;
   }