console.log('Hola mundo');

var mutar;
var nombre = 'Adan';
mutar = nombre; //no hay casting porq no hay tipos de datos en js
var edad = 26;
mutar = edad;
var peso= 200.4;
var casado = false;
var fechaNac= new Date();
var noExisto =null;  //false
var noeEstadefinido = undefined;

var nombre = 'Adan';
var edad = 26;
var peso= 200.4;

// 0 flase 1 verdadero

// cmd + a = sellecion codigo
//cmd + alt + l= identar
if (noExisto){
    console.log('Verdadero');

}else {
    console.log('Falso');
}

// JSON
// se los llam objetos
var usuario = {  //abierto y cerrado por llaves. cada clave solo tiene un valor
    "nombre": "ADAN",
    "apellido": "GUZMAN",
    cedula: 'adan',
    edad: 28,

    //usando metodos
    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);

    }

};

// ingreso a datos de los objetos
console.log(usuario.nombre);//"adan"

console.log(usuario);

delete usuario.edad;
console.log(usuario);

usuario.FechaNacimiento = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre =="adn";
console.log(usuario);

//ARREGLO
var arreglo = [1,
    "adan",
    true,
    undefined,
    null,
    new Date(),
    {
        nombre: "fra"
    },
    [1,2,3,true]
];

// funciones

function sumarNumeros(numUno, numDos) {
    return numUno + numDos;
}
console.log(sumarNumeros(1,2));
console.log(sumarNumeros(1,2.223));

var potenciaDeDosDeUnNumero = function noesnecesarioponerelnombre (numero){
  return numero * numero;
};

var potenciaDeDosDeUnNumero = function (numero){
    return numero * numero;
};
console.log(potenciaDeDosDeUnNumero(1,2,3,25,4));

console.log(potenciaDeDosDeUnNumero(2));

usuario.imprimir();