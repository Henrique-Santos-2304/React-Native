import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";

interface ContainerProps{
    color: string
}
export const Container = styled.View<ContainerProps>`

    ${({theme, color})=> css`
        width: 70%;
        margin: 0 auto;
        background: ${theme.colors.primary};

        flex-direction: row;
        justify-content: space-between;

        padding: 13px;
        margin-bottom: 12px;

        border-radius: 10px;
        border-left-width: 9px;
        border-left-color: ${color};

        `}
`
export const Title = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.fonts.family.regular};
        font-size: ${RFValue(15)}px;
        color: ${theme.colors.secondary};
    `}
`
export const Amount = styled.Text`
 ${({theme})=> css`
    font-family: ${theme.fonts.family.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.secondary};

    `}
`