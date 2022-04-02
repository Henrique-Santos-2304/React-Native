import React from 'react';
import { useAuthContext } from '../../../hooks/authContext';
import * as S from './style';

interface Props {
  tintType: "dark" | "light" | "default";
  intensityBlur: number;
  children: React.ReactNode;
  radius?: string
}

const BlurView = ({children, tintType, intensityBlur, radius}:Props) => {
  const {backgroundToogle} = useAuthContext()

  const imageDark = require(`../../../assets/images/dark.jpg`)
  const imageLight = require(`../../../assets/images/light.jpg`)
  
  return (
      <>
        <S.Image  
          source={backgroundToogle === "dark" ? imageDark : imageLight} 
          radius={radius}
          />
        <S.Container intensity={intensityBlur} tint={tintType} radius={radius}>
        {children}
        </S.Container>
      </>

  );
}

export default BlurView