import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {RFValue} from "react-native-responsive-fontsize";
import theme from '../../../../global/theme';

interface IconProps{
  type: "up" | "down" | "total"
}

const colorIcons = {
  up: theme.colors.sucess,
  down: theme.colors.rejected,
  total: theme.colors.primary
};

export const Container = styled.View<IconProps>`
  width: ${RFValue(280)}px;
  max-height: ${RFValue(170)}px;

  margin-right: ${RFValue(12)}px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  `;

export const View = styled.View`
  width: 100%;
  padding: 0 14px;
  border-radius: 8px;

`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;

`;

export const Title = styled.Text<IconProps>`
  ${({theme, type})=> css`
  font-family: ${type === "total" ? theme.fonts.family.bold : theme.fonts.family.regular};
  font-size: ${RFValue(14)}px;

  color: ${type === "total" ? theme.colors.primary:theme.colors.secondary}; 
  `}
`;

export const Icon = styled(Feather)<IconProps>`
  ${({type})=> css`
  font-size: ${RFValue(40)}px;
  color: ${colorIcons[type]};
  `};
`;

export const Footer = styled.View`
  margin-bottom: 18px;
`;

export const Amount = styled.Text<IconProps>`
  ${({theme, type})=> css`
    font-family: ${theme.fonts.family.medium};
    font-size: ${RFValue(32)}px;

    color: ${type === "total" ? theme.colors.primary :theme.colors.secondary};
    margin-top: 38px;
  
  `}
`;

export const LastTransaction = styled.Text<IconProps>`
  ${({theme, type})=> css`
    font-family: ${theme.fonts.family.regular};
    font-size: ${RFValue(11)}px;
    color: ${type === "total" ? theme.colors.primary :theme.colors.secondaryLight};

  `}
`;