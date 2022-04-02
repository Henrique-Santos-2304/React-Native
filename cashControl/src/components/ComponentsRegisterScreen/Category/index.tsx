import React from 'react';
import * as S from './style';

import { CategoryItemsProps } from '../../../utils/catgories';

interface Props extends Omit<CategoryItemsProps, "key">{
  onPressCallback: () => void;
  isActive: boolean;
}

const Category = ({icon, name, color, onPressCallback, isActive}: Props) => {
  return (
    <S.FadeInAnimateCard 
        animation="fadeInLeft"
        duration= {1000} > 

      <S.Container onPress={onPressCallback} isActive={isActive}>
        <S.Icon name={icon} color={color}/>
        <S.Name isActive={isActive}>{name}</S.Name>
      </S.Container>
      
  </S.FadeInAnimateCard>
  )
}

export default Category;