import React from "react";
import {render, RenderOptions} from '@testing-library/react-native'
import { ReactElement, JSXElementConstructor } from 'react';
import {ThemeProvider} from "styled-components/native";
import theme from '../global/theme';

const AllTheProviders = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

const customRender = (
    ui: ReactElement<any, string | JSXElementConstructor<any>>, 
    options?: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}