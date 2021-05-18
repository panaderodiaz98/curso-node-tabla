const {getCrearArchivo} = require ('./helpers/multiplicar');
const argv = require ('./yargs/yargs');
const colors = require('colors');

console.clear(); //limpia la consola para que sea mas prolijo

console.log(argv);


//const base = 8;
getCrearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(error => console.log(error));

