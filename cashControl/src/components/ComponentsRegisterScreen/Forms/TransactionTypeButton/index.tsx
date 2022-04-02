import React, { memo } from 'react';

import BlurView from '../../../GlobalComponents/BlurView';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './style';

type CategoryTtransaction ={
  setTrasanctionTypeError: boolean;
  category: boolean
};
interface Props extends RectButtonProps {
  title: "Entrada" | "Saída";
  type: "up" | "down" ;
  isActive: boolean;
}
const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle"
}

const TransactionTypeButton = (
  {title, type, isActive, ...rest}: Props) => {
  return (
    <S.Container isActive={isActive}>
      <BlurView 
        tintType={isActive ? "dark" : "light"} 
        intensityBlur={isActive ? 85 : 90} 
        radius="5px"
        >

        <S.ContentTransactions  {...rest} >
          <S.Icon name={icons[type]} type={type} />
          <S.Title isActive={isActive}>{title}</S.Title>
        </S.ContentTransactions>

      </BlurView>
    </S.Container>
  );
}

export default memo(TransactionTypeButton, (prevState, proState)=> {
  return Object.is(prevState, proState ) 
});