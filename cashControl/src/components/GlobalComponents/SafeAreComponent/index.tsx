import React from 'react';
import theme from '../../../global/theme';
import * as S from './style';

interface Props{
    children: React.ReactNode;
}

const SafeAreComponent= ({children}: Props) => {
  return (
      <S.Container>
          <S.StatuBar backgroundColor="transparent" translucent />
          {children}
      </S.Container>
  );
}

export default SafeAreComponent;