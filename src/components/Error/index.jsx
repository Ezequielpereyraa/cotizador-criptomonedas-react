import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
  background-color: #b7322c;
  color: white;
  padding: 1rem;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue';
`;
const Error = ({ mensaje }) => {
  return <MensajeError>{mensaje}</MensajeError>;
};

export default Error;
