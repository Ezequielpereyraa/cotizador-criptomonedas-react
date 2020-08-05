import React from 'react';
import { ResultadoDiv, Info, Precio } from './styled';
const index = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El Precio en peso <span>{cotizacion.PRICE}</span>
      </Precio>
      <Info>
        El Precio mas alto del día es de <span>{cotizacion.HIGHDAY}</span>
      </Info>
      <Info>
        El Precio mas bajo del día es de <span>{cotizacion.LOWDAY}</span>
      </Info>
      <Info>
        Variacion en las ultimas 24 horas
        <span>{cotizacion.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Ultima Actualizacion <span>{cotizacion.LASTUPDATE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default index;
