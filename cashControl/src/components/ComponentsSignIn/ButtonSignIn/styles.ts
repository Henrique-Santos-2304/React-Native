import styled, { css } from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface PropsIcons{
    iconName: string
}
export const ContentIcon =styled(RectButton)` 
    ${({theme})=> css` 
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        margin-bottom: 14px;
        padding: 14px 28px;
        border-radius: 8px;
        background: ${theme.colors.bgLight};
    `}
`
export const Icons = styled(AntDesign)<PropsIcons>` 
    ${({theme, iconName })=> css` 
        color: ${iconName === "google" ? theme.colors.primary : "#111"};
        font-size: ${RFValue(32)}px;
    `}
`
export const TextLogin =styled.Text` 
    ${({theme})=> css` 
        color: ${theme.colors.primary};
        font-size: ${RFValue(18)}px;
        margin-left: 24px ;
    `}
`