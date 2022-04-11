


const fs = require('fs');
const { resolve } = require('path');
console.clear();
console.log()

const tabla = ( base, listar= false, limite= 10 ) =>{
     
   return new Promise((resolve, reject)=>{
            
       let salida = '';
       for( let i = 0; i<=limite; i++){
          salida += `${base} x ${i} = ${i*base}\n`;
       }

       if(listar){
           console.log(salida);
       }

      
       
       if( base > 5 ){
        reject(`No se puede ejecutar con base ${base}`); 
       }else {
        resolve(salida);
       }


         
    });
}

const crearArchivo = async( base = 5, listar=false, limite = 10 ) => {
     try{
        let sl = await tabla(base, listar, limite);

        fs.writeFileSync(`tabla-${base}.txt`, sl , (err)=>{
           if(err) throw err;
       
           console.log('tabla-5.txt creado')
       })
     }catch(err){
         throw err;
     }
   

}


module.exports = {
    crearArchivo
}


