import styled, { css } from 'styled-components/native';
import {RectButton} from "react-native-gesture-handler";
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

type IconProps={
  type: "up" | "down"
}
 interface ActiveStyleProps{
  isActive: boolean
 }

export const Container = styled.View<ActiveStyleProps>`
${({isActive, theme})=> css`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border-width: ${isActive ? "1.4px":"0"};
  border-color: ${isActive ? theme.colors.primary:"transparent"};

  `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({theme, type})=> 
    type === "up" ? theme.colors.sucess : theme.colors.rejected}; 
`;

export const ContentTransactions = styled(RectButton)`
  width: 100%;
  padding: 16px ;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  border-radius: 5px;
  
`
export const Title = styled.Text<ActiveStyleProps>`
  ${({theme, isActive})=> css` 
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.family.regular};
  font-weight: bold;
  color: ${isActive ? theme.colors.primary:theme.colors.secondary};
 
  `}
`;