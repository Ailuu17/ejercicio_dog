import React, { useState } from 'react'; //useState se debe importat

function DogComponent() {
  const [perritos, setPerritos] = useState([]); //useState se debe importar

    const cargarPerritos = async () => {
      const response = await fetch('https://api.example.com/perritos');
      const data = await response.json();
      setPerritos(data);
    };

}

export default DogComponent;
