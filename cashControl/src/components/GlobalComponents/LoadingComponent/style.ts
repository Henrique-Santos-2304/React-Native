import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1 ;

  align-items: center;
  justify-content: center;

  background: ${({theme})=> theme.colors.mainBg}
`;
export const Text = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme})=> theme.colors.primary};
    margin-bottom: 19px;
`