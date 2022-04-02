import styled, { css } from 'styled-components/native';
import {FlatList} from "react-native"
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';


import { ReturnDataprops } from '../../../../utils/handleDataListBalance';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
  
  padding: 0 24px;
  margin-top: ${RFPercentage(3)}px;
  margin-bottom: 40px;
`;
export const TitleContent = styled.View` 
  height: 80px;
  margin-bottom: 12px;;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RemoveAllTransactions= styled(RectButton)` 
`

export const IconDelete = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme})=> theme.colors.primary};
`;

export const Title = styled.Text`
  ${({theme})=> css`
  color: ${theme.colors.primary};

  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.family.regular};

  
  `}
`
export const TransactionsList = styled(
  FlatList as new () => FlatList<ReturnDataprops>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
})`
  
`
export const Modal = styled.View` 

  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0,0,0,0.78);
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`
