const fs = require (`fs`);
const colors = require('colors');

console.clear(); //limpia la consola para que sea mas prolijo

const getCrearArchivo = async(base=4, listar=false,hasta=10) => { //A los argumentos q le paso le pongo el ""=" para asegurarme q tengan un valor por defecto
    try{
        let salida = '';
        let consola = '';

        for(let i = 1; i<=hasta; i++){

            const multiplicacion = base * i;
            salida += (`${base} x ${i} = ${multiplicacion} \n`);
            consola += (`${base} x ${i} = ${multiplicacion} \n`.bgMagenta);
            
            }

        if(listar)
        {
            console.log(`=======================`.bgCyan);
            console.log(`     TABLA DEL: ${base}`.white.bgCyan);
            console.log(`=======================`.bgCyan);
            console.log(consola);         
        } 


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creada`;

    } catch (error){

            console.log(error);
    }
        


}

module.exports = {

    getCrearArchivo
}
