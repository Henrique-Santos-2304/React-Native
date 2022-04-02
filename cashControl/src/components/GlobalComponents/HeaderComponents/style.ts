import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   ${({theme})=> css`
  width: 100%;
  height: ${RFValue(102)}px;

  background: ${theme.colors.bgLight};

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;

  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;

  padding-bottom: 16px;
  margin-bottom: ${RFValue(32)}px;

    `}
`;

export const Title = styled.Text`
  ${({theme})=> css`
    font-family: ${theme.fonts.family.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.primary};


`}
`;
