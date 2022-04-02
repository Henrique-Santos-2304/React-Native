import React from 'react';
import * as S from './style';

interface Props{
    msgError: string
}
const Errors = ({msgError}:Props) => {
  return (
      <S.Container>
          <S.Icon name="alert-circle" />
          <S.ErrorMessage>{msgError}</S.ErrorMessage>
      </S.Container>
  );
}

export default Errors;