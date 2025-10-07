import React, { useState } from 'react'; 

function DogComponent() {
  const [perritos, setPerritos] = useState([]); //useState se debe importar

    const cargarPerritos = async () => {  //Async para que la pagina no esté estatica mentras espera los datos de la api

      try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random/20'); //await para que espere la respuesta de la api
        const datos = await respuesta.json(); 
        setPerritos(datos); //actualizar el estado de perritos

      } catch (error) {
        console.error('Error al cargar las imágenes de perros:', error);
      }
 
    };
  

    return (
      <>

      <button onClick={cargarPerritos}>Cargar Perritos</button>
      <div>{perritos}</div>
        
      </>
    )

}

export default DogComponent;
   