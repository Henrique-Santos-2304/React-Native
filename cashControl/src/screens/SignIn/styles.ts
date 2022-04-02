import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.View`

    ${({theme})=> css`
        flex: 1;
        align-items: center;
        justify-content:space-around

    `}
`


export const ContentIcon = styled.View` 
    align-items: flex-start;
    justify-content:center;
    width: 80%;
`
export const IconCash = styled(MaterialCommunityIcons)` 
    ${({theme})=> css`
        color: ${theme.colors.effectColor};
        font-size: ${RFValue(38)}px;
    `}
`
export const Header = styled.View` 
     ${({theme})=> css`
        height: ${RFValue(160)}px;

        align-items: center;
        justify-content:center;


    `}
`
export const Logo = styled.View` 
     ${({theme})=> css`
        align-items: center;
        justify-content:space-between

    `}
`

export const Title = styled.Text` 
     ${({theme})=> css`
       font-size: ${RFValue(24)}px;
       color: ${theme.colors.primary};
       font-family: ${theme.fonts.family.bold}

       border-bottom-width: 5px ;
       border-bottom-color: ${theme.colors.effectColor} ;
       border-bottom-left-radius: 7px;
       border-bottom-right-radius: 7px;

    `}
`
export const TextLogo = styled.Text` 
     ${({theme})=> css`
     margin-top: 14px;
       font-size: ${RFValue(16)}px;
       color: ${theme.colors.primary};
       font-family: ${theme.fonts.family.bold}



    `}
`