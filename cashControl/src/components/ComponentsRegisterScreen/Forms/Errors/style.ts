import styled, { css } from 'styled-components/native';
import {Feather} from "@expo/vector-icons";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
`;

export const Icon = styled(Feather)`
${({theme})=> css`
  color: ${theme.colors.rejected}
  margin-left: 10px;
  font-size: ${RFValue(11)}px;
`}
`;

export const ErrorMessage = styled.Text`
${({theme})=> css`
    font-size: ${RFValue(11)}px;
    color: ${theme.colors.rejected};
    font-family: ${theme.fonts.family.regular};

    margin: 5px 6px;
`}
`;
