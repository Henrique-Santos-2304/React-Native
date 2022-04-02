import React, { memo } from 'react';
import * as S from './style';

interface Props {
  title: string;
  onPress: ()=> void
}

const CategorySelect = ({title, onPress}: Props) => {
  return (
    <S.Container onPress={onPress}>
      <S.Category>{title}</S.Category>
      <S.Icon name="chevron-down"/>
    </S.Container>
  );
}

export default memo(CategorySelect, (prevState, proState)=>{
  return Object.is(prevState, proState)
});