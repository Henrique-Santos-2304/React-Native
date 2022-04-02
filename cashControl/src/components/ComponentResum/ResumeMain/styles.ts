import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";
import { PropsAbstractData } from '../../../screens/AbstractNegative';

export const ContentList = styled.View`
        flex: 1;
        margin-top: -30px;
        align-items: center;

`
export const TransactionsList = styled(
    FlatList as new () => FlatList<PropsAbstractData>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: getBottomSpace()
    }
  })`
    
  `
  export const WarningNoData = styled.Text` 
    ${({theme})=> css` 
      font-family: ${theme.fonts.family.bold};
      font-size: ${RFValue(18)}px;


      color: ${theme.colors.primary};
      text-align: center;
      margin-top: 20px;

    `}
  `