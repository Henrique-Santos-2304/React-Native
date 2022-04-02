import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from "styled-components/native";
import {Feather} from "@expo/vector-icons"

export const BackgroundButtonToogle = styled(RectButton)` 
    align-items: center;
    flex-direction: row;
    justify-content: center;

`
export const Icons = styled(Feather)` 

`
export const ViewIcon = styled.View` 
  ${({theme })=> css` 
    align-items: center;
    justify-content: center;

    margin: 0 4px;
    
    `}
`


