import React from 'react';

import * as S from "./styles";
import AppleSvg from "../../../assets/images/apple.svg";
import GoogleSvg from "../../../assets/images/google.svg";
import { RFValue } from 'react-native-responsive-fontsize';


interface Props{
    icon: string;
    text: string;
    loggin: () => Promise<void>
}

const ButtonSignIn= ({icon, text, loggin}: Props) => {
    return (
        <S.ContentIcon onPress={loggin}>
            {icon === "google" 
                ?  <GoogleSvg 
                    width={RFValue(35)} 
                    height={RFValue(35)}/>
                : <AppleSvg 
                width={RFValue(40)} 
                height={RFValue(40)}
                color="#111"/>    
            }
            <S.TextLogin>{text}</S.TextLogin>
        </S.ContentIcon>
    )
}

export default ButtonSignIn;