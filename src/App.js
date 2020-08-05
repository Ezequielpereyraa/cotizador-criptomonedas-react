import React, { useState, useEffect } from 'react';
import { Contenedor, Imagen, Heading } from './style';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spiner from './components/Spiner';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [cotizacion, setCotizacion] = useState({});
  const [showSpiner, setShowSpiner] = useState(false);
  useEffect(() => {
    const cotizarMoneda = async () => {
      if (moneda === '') return; //evita la primer ejecucion
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await fetch(url);
      const resultadoData = await resultado.json();
      setShowSpiner(true);
      setTimeout(() => {
        setShowSpiner(false);
        setCotizacion(resultadoData.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    cotizarMoneda();
  }, [moneda, criptomoneda]);

  // Cargar sipner
  let componente = showSpiner ? (
    <Spiner />
  ) : (
    <Cotizacion cotizacion={cotizacion} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt='logo' />
      </div>
      <div>
        <Heading> Cotiza Criptomonedas al Instante</Heading>
        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
        {componente}
      </div>
    </Contenedor>
  );
};

export default App;
