import React, { useEffect, useState } from 'react';

function DogComponent() {
  const [perritos, setPerritos] = useState([]);
  const [cargando, setCargando] = useState(false);
 
  useEffect(() => {
    cargarPerritos();
  }, []);

  const cargarPerritos = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch('https://dog.ceo/api/breeds/image/random/20');
      const datos = await respuesta.json();

      setPerritos(datos.message);

    } catch (error) { 
      console.error('Error al cargar las imágenes de perros:', error);
    }

    setCargando(false);
  };

  return (
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
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '20px'
          }}
        >
          {perritos.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="Perrito"
              width="200"
              style={{objectFit: 'cover'}}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DogComponent;

