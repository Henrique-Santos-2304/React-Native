import React from 'react';


import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
} from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";
import theme from './src/global/theme';
import { AuthContextProvider, useAuthContext } from './src/hooks/authContext';

import Routes from './src/routes';

export default function App() {
  const {userLoading } = useAuthContext()
  const [fontsloading]= useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  })
  
  if(!fontsloading || userLoading ){
    return <AppLoading />
  } 
  
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Routes />  
      </AuthContextProvider>
    </ThemeProvider>
  );
}


