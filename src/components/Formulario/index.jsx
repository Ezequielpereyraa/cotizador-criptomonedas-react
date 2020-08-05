import React, { useEffect, useState } from 'react';
import { Boton } from './style';
import useMoneda from '../../Hooks/useMoneda';
import useCriptomoneda from '../../Hooks/useCriptomoneda';
import Error from '../Error';
const Formulario = ({ setMoneda, setCriptomoneda }) => {
  //state del listado de criptomonedas
  const [error, setError] = useState(false);

  const [listacripto, setListacripto] = useState([]);

  const MONEDA = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'ARG', nombre: 'Peso Argentino' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
  ];

  //state del custom hook useMoneda
  const [moneda, Seleccionar] = useMoneda('Elige tu moneda', '', MONEDA);
  //state del useMoneda
  const [criptomneda, SeleccionarCriptomoneda] = useCriptomoneda(
    'Elige tu criptomoneda',
    '',
    listacripto
  );

  useEffect(() => {
    const consultaApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const response = await fetch(url);
      const datos = await response.json();
      setListacripto(datos.Data);
    };
    consultaApi();
  }, []);

  const cotizarMoneda = (e) => {
    e.preventDefault();
    // Validar si estan llenos
    if (moneda === ' ' || criptomneda === '') {
      setError(true);
      return;
    }
    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptomneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje='Complete ambos campos' /> : null}
      <Seleccionar />
      <SeleccionarCriptomoneda />
      <Boton type='submit' value='Cotizar'>
        Cotizar
      </Boton>
    </form>
  );
};

export default Formulario;
