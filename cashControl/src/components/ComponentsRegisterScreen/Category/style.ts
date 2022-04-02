import styled, { css } from 'styled-components/native';
import {Feather} from "@expo/vector-icons";
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';

interface IconProps{
  color: string
}
interface CategoryActiveprops {
  isActive: boolean
}
export const FadeInAnimateCard = styled(Animatable.View)``
export const Container = styled.TouchableOpacity<CategoryActiveprops>`
  ${({theme, isActive})=> css`
    width: 90%;
    margin: 6px auto;

    flex-direction: row;
    align-items: center;
    padding: ${RFValue(15)}px;

    background: ${isActive ? "#01a9ec" : theme.colors.primary}
    border-radius: 5px;
  `}
`;

export const Icon = styled(Feather)<IconProps>`
  ${({ color})=> css`
    color: ${color};
    font-size: ${RFValue(20)}px;

  `}
`;

export const Name = styled.Text<CategoryActiveprops>`
  ${({theme, isActive})=> css`
    margin-left: 16px;
    font-family: ${theme.fonts.family.regular};
    font-size: ${RFValue(13)}px;
    color: ${isActive ? theme.colors.primary :theme.colors.secondary};
  `}
`;

