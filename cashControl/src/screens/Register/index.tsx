import React from 'react';
import * as S from "./style";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import SafeAreComponent from '../../components/GlobalComponents/SafeAreComponent';
import BlurView from '../../components/GlobalComponents/BlurView';
import HeaderComponents from '../../components/GlobalComponents/HeaderComponents';
import MainRegister from '../../components/ComponentsRegisterScreen/MainRegister';
import { AdmobBanner } from '../../components/GlobalComponents/Admob';

const Register = ({navigation}) => {
  return (
    <SafeAreComponent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>       
        <S.Container>

          <BlurView 
            tintType="light"
            intensityBlur={8}
            >
            <HeaderComponents text="Registro" />
            <MainRegister navigation={navigation}/>
            <AdmobBanner />

          </BlurView>
          
        </S.Container>
      </TouchableWithoutFeedback>
    </SafeAreComponent>
  );
}

export default Register;