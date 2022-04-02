import styled, { css } from 'styled-components/native';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(GestureHandlerRootView)`
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.57);   
`;
export const ContentButton = styled.View`
    width: 60%;   
    margin-top: 20px;

    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const Button = styled(RectButton)`
  padding: 4px 8px;
  border-radius: 3px;
  background: ${({theme})=>theme.colors.bgLight};
`
export const Text = styled.Text`
  font-size: ${RFValue(15)}px;
`;
