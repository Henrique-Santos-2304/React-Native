import styled from 'styled-components/native';

import { RectButton } from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";

export const EyeBalanceVisible = styled(RectButton)`
  margin-top: 8px;
  padding: 10px;

  align-self: flex-end;
  flex-direction: row;
  align-items: center;

`
export const BalanceText = styled.Text`
    font-size: ${RFValue(12)}px;
    color:${({theme})=>theme.colors.primary};
    font-family: ${({theme})=>theme.fonts.family.regular};
    
    margin-right: 8px;

`;
export const IconEye =  styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme})=> theme.colors.primary};
  
`

