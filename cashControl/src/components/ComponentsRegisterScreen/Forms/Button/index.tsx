import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';


import * as S from './style';

interface Props extends RectButtonProps{
  title: string;
  onPress: () => void
}

const Button= ({title, onPress,  ...rest}: Props) => {
  return (
    <S.Container {...rest} onPress={onPress} > 

        <S.ButtonContent>
          <S.Title>{title}</S.Title>
        </S.ButtonContent>

    </S.Container>
  );
}

export default Button;