const { crearArchivo } = require('./helpers/tabla5.js');

const argv = require('yargs')
             .options('b',{
                 alias:'base',
                 type:'number',
                 demandOption : true
             }).options('l',{
                 alias:'listar',
                 type:'boolean',
                 default:false,
                 demandOption: false
             })
             .options('h',{
                alias:'hasta',
                type:'number',
                default:10,
                demandOption: false
            })
             .check((argv, options)=>{
                  if(isNaN( argv.b )){
                      throw 'la base tiene que ser un numero'
                  }
                  return true;
             })
             .argv;

console.log( process.argv );

console.log( argv.b )

console.log( argv.l )

console.log( argv.h )

console.log('base: yargs', argv.base);


crearArchivo(argv.b, argv.l, argv.h ).then( (resp) =>{
     console.log( `listo`);
}
    
).catch((err)=>{
    console.log(err);
})