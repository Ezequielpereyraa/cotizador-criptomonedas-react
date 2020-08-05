import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
const useMoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom Hooks
  const Label = styled.label`
    font-family: 'Bebas Neue';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
  `;
  const Select = styled.select`
    background-color: #fff;
    width: 100%;
    border: none;
    font-size: 1.2rem;
    padding: 1rem;
  `;
  const [state, setState] = useState(stateInicial);
  const Seleccionar = () => (
    <Fragment>
      <Label htmlFor=''>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value=''>--Seleccione--</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  // Retornar state, interfaz y funcion que modifica el state
  return [state, Seleccionar, setState];
};

export default useMoneda;
