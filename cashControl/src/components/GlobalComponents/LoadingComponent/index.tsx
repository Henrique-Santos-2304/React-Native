import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../../global/theme';
import * as S from './style';


const LoadingComponent = () => {
  return (
    <S.Container >
        <S.Text>Carregando... </S.Text>
        <ActivityIndicator color={theme.colors.primary} size="large" />
    </S.Container>
  )
}

export default LoadingComponent;