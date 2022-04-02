import styled, {css} from 'styled-components/native';
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons";
import {BorderlessButton} from "react-native-gesture-handler";

export const Header = styled.View`
  width: 100%;
  padding-top: 40px;
`;
export const userContent = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(14)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`
export const IconPower = styled(Feather)`
  color: ${({theme}) => theme.colors.rejected};
  font-size: ${RFValue(24)}px;
`
export const LogoutButton = styled(BorderlessButton)`

`
export const UserInfo= styled.View`
  flex-direction: row;
  align-items: center;
`

export const ContentTitle= styled.View`
    margin-left: 17px;
`

export const ImageUser= styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(24)}px;
`
export const Welcome= styled.Text`
  ${({theme})=> css`
    color: ${theme.colors.primary};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.family.regular};
  `}
`
export const Name= styled(Welcome)`
${({theme})=> css`
font-family: ${theme.fonts.family.bold};
font-size: ${RFValue(14)}px;

`}
`
