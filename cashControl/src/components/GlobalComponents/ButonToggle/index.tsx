import React from 'react';
import theme from '../../../global/theme';
import { useAuthContext } from '../../../hooks/authContext';

import * as S from "./styles";

interface Props{
    handleBgToogle: () => void
}
const ButtonToggle= () => {
    const {backgroundToogle, setBackgroundToogle} = useAuthContext()

    const handleBgToogle = () =>{
        backgroundToogle === "dark" 
        ? setBackgroundToogle("light") 
        : setBackgroundToogle("dark")
    }
    return (
        <S.BackgroundButtonToogle onPress={handleBgToogle}>

          <S.ViewIcon>
            <S.Icons
              name="moon"
              size={backgroundToogle === "dark" ? 22 : 14}
              color={backgroundToogle === "dark" 
                ? theme.colors.mainBg : theme.colors.mainBgLightMoon}
            />
          </S.ViewIcon>

          <S.ViewIcon>
            <S.Icons
              name={backgroundToogle === "dark" 
                  ? "toggle-left" : "toggle-right"}

              size={30}
              color={backgroundToogle === "dark" 
                ? theme.colors.mainBg : theme.colors.effectColor}
            />
          </S.ViewIcon>

          <S.ViewIcon >
            <S.Icons
              name="sun"
              size={backgroundToogle === "light" ? 22 : 14}
              color={backgroundToogle === "light" 
                ? theme.colors.effectColor : theme.colors.effectColorLight}
            />
          </S.ViewIcon>
          
        </S.BackgroundButtonToogle>
    );
}

export default ButtonToggle;