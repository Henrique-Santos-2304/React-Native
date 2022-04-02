import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface PropsSTyle{
  balanceVisible: boolean
}
export const Container = styled.View`
  ${({theme})=> css`
  flex: 1;
  background: ${theme.colors.primary};
  `}
`;

export const View = styled.View<PropsSTyle>`
  ${({theme, balanceVisible})=> css`
  align-items: center;
  justify-content: center;
  padding-bottom: ${balanceVisible ? RFValue(28): RFValue(14) }px;
  background: ${theme.colors.bgLight};
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  `}
`;
export const ContentToogle = styled.View` 
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
`