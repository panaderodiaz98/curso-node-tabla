const argv = require ('yargs')
.option('b', {
    alias: 'base',
    demandOption: true,
    type: 'number',
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    default: false,
    type: 'boolean',
    describe: 'Muestra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    demandOption: true,
    type: 'number',
    default: 10,
    describe: 'Hasta que numero multiplico'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw `la base tiene que ser un numero`;
    }
    return true;
})
.argv;

module.exports = argv;
