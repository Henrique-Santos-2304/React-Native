import React, { useState } from 'react';
import * as S from "./styles";

import * as Animatable from 'react-native-animatable';

import ButtonSignIn from '../../components/ComponentsSignIn/ButtonSignIn';
import BlurView from '../../components/GlobalComponents/BlurView';
import SafeAreComponent from '../../components/GlobalComponents/SafeAreComponent';
import { useAuthContext } from '../../hooks/authContext';
import { ActivityIndicator, Alert, Platform } from 'react-native';


const SignIn= () => {
    const { signInWithGoogle, signInWithApple} = useAuthContext()
    const [isLoading, setIsloading] = useState(false)

    async function handleSignIn(platform: "apple" | "google"){
        try{
            setIsloading(true)
            if(platform === "google"){
                return await signInWithGoogle()
            }else{
                return await signInWithApple()
            }
        }catch(error){
        console.log(error)
        Alert.alert('Erro ao fazer Loggin')
        setIsloading(false)
    }
}
    return (
    <SafeAreComponent>
        <S.Container>
            <BlurView 
            tintType="light"
            intensityBlur={8}
            >
            <S.Container>
                <S.Header>
                <Animatable.View 
                    animation="slideInDown" 
                    iterationCount="infinite" 
                    direction="alternate"
                    duration= {2000}
                    >
                    <S.Logo>
                        <S.IconCash name="account-cash"/>
                        <S.Title>cashControl</S.Title>
                    </S.Logo>
                </Animatable.View>
                    <S.TextLogo>Seu Dinheiro Controlado</S.TextLogo>
                </S.Header>

                <S.ContentIcon> 

                    <Animatable.View 
                        animation="fadeInLeft" 
                        style={{width: "100%"}}
                        duration= {3000}
                        >
                        <ButtonSignIn 
                            icon="google" 
                            text="Entrar com Google"
                            loggin={() => handleSignIn("google")}
                            />
                    </Animatable.View>

                   {Platform.OS === "ios" && <Animatable.View 
                        animation="fadeInRight" 
                        style={{width: "100%"}}
                        duration= {3000}
                        >
                        <ButtonSignIn 
                        icon="apple1" 
                        text="Entrar com Ios"
                        loggin={() => handleSignIn("apple")}
                        />
                    </Animatable.View>}

                </S.ContentIcon>
                {isLoading && 
                    <ActivityIndicator 
                        color="#f8f8f8" 
                        size="large"
                        style={{marginTop: -80 }}/>
                }
            </S.Container>
            </BlurView>
         </S.Container>
    </SafeAreComponent>
    );
}

export default SignIn;