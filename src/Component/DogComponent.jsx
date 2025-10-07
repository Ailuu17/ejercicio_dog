import React, { useEffect, useState } from 'react'; 

function DogComponent() {
  const [perritos, setPerritos] = useState([]); //useState se debe importar
  const [cargando, setCargando] = useState(false); //estado para manejar la carga

   
  useEffect(() => {  //useEffect se debe importar 
    cargarPerritos(); //cargar perritos al cargar el componente
  }, []  //dependencias vacías para que solo se ejecute al montar el componente
  ); 
  
    const cargarPerritos = async () => {  //Async para que la pagina no esté estatica mentras espera los datos de la api

      try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random/20'); //await para que espere la respuesta de la api
        const datos = await respuesta.json(); 
        setPerritos(datos.message); //actualizar el estado de perritos
        console.log(datos);


      } catch (error) {
        console.error('Error al cargar las imágenes de perros:', error); 
      }
 
    };
  

    return (
      <>

      <button onClick={() => cargarPerritos()}>Cargar Perritos</button>
      <br />
      <br />
      {perritos.map((url) => (
        <img src={url} width="200" />
      ))}

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button onClick={cargarPerritos}>
            Cargar perritos
        </button>

        {cargando ? (
            <div style={{ margin: '40px 0' }}>
                <img
                    src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                    alt="Cargando perritos..."
                    style={{ width: '200px', height: '200px' }}
                />
                <p>Buscando perritos...</p>
            </div>
        }

    ) : (
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            marginTop: '20px' 
        }}>

            {perritos.map((url, index) => (
                <img 
                 src={url} 
                 width: '200px'
                 style={{objectfit: 'cover'}}
        />
            ))}

        </div>
         )}
        </div>
    );

} 


export default DogComponent;
   