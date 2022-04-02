import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from "styled-components/native";
import {Feather} from "@expo/vector-icons";
import { RFValue } from 'react-native-responsive-fontsize';

export const MonthSelect = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 14px 29px;
`
export const MonthSelectButton = styled(BorderlessButton)`
`
export const MonthIcon =  styled(Feather)`
    ${({theme})=> css` 
        color: ${theme.colors.primary}
        font-size: ${RFValue(28)}px;
        
    `}
`
export const Month = styled.Text`
    ${({theme})=> css` 
    color: ${theme.colors.primary}
        font-size: ${RFValue(20)}px;
        font-family: ${theme.fonts.family.bold};
    `}
`