import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import {RectButton} from "react-native-gesture-handler";

interface TypeProps {
  type: string;
}
interface ColorProps{
  color: string
}

export const Container = styled.View`
  max-height: 150px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const ImageBlur = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ContentTransactionList = styled.View`
  border-radius: 5px;
  width: 100%;
  padding: 10px 24px;
`;

export const Title = styled.Text`
  ${({theme})=> css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.family.regular};

    color: ${theme.colors.secondary};
    `}
  `;

export const Amount = styled.Text<TypeProps>`
  ${({theme, type})=> css`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.fonts.family.regular};

    margin-bottom: 16px;
    margin-top: 2px;
    
    color: ${type === "positive" ? theme.colors.sucess : theme.colors.rejected};

  `}
`;

export const Footer = styled.View`
  ${({theme})=> css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 15px;
  `}
`;

export const Category = styled.View`
  ${({theme})=> css`
  flex-direction: row;
  
  `}
`;
export const ContentTitle= styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;
export const ButtonDelete= styled(RectButton)`
  padding: 8px;
  border-radius: 10px;
`;

export const IconDelete = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;

export const Icon = styled(Feather)<ColorProps>`
  ${({theme, color})=> css`
    font-size: ${RFValue(20)}px;
    color: ${color};
  `}
`;

export const CategoryName = styled.Text`
  ${({theme})=> css`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.family.regular};

  margin-left: 17px ;
  color: ${theme.colors.secondary};
  `}
`;

export const Date = styled(CategoryName)`
  ${({theme})=> css`
  color: ${theme.colors.secondary};
  `}
`;

;
export const Modal = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,0.78);
  padding: 9px;

  align-items: center;
  justify-content: center;
`