import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(RectButton)`
  ${({theme})=> css`
    width: 100%;
    height: ${RFValue(60)}px;

    background: ${theme.colors.mainBg};
    border-radius: 5px;

    align-items: center;
    justify-content: center;
 
  ` }
`;
export const ButtonContent = styled.View`
  height: 100%;
  justify-content: center;
   align-items: center;

   border-radius: 5px;
`

export const Title = styled.Text`
  ${({theme})=> css`
  font-family: ${theme.fonts.family.medium};
  font-size: ${RFValue(16)}px;

  color: ${theme.colors.primary};
  
  ` }
`;
