import React from 'react';
import * as S from './style';

import { TextInputProps } from 'react-native';
import {Control, Controller} from "react-hook-form";

import Input from '../Input';
import Errors from '../Errors';

interface Props extends TextInputProps{
    control: Control;
    name: string;
    error: string
}
const InputForm= ({name, control, error, ...rest}:Props) => {
  return (
      <S.Container>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => 
            <Input 
            onChangeText={onChange}
            value={value}
            {...rest} />
            }
            name={name}
          /> 
         {error && <Errors msgError={error}/>}
      </S.Container>
  );
}

export default InputForm;