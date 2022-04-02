import React from 'react';
import ButtonToggle from '../ButonToggle';
import * as S from './style';

interface Props{text: string}

const HeaderComponents = ({text}: Props) => {
  

  return (
      <S.Container>
        <S.Title>{text}</S.Title>
        <ButtonToggle />
      </S.Container>
  );
}

export default HeaderComponents;