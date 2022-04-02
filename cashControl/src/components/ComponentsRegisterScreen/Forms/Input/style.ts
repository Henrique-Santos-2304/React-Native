import { TextInput } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
${({theme})=> css`
  width: 100%;

  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.family.regular};
  
  background: ${theme.colors.primary};
  color: ${theme.colors.text};
  
  padding: 18px 16px;
  border-radius: 5px;
  margin-bottom: 8px;
`}

`;
