import React from 'react';
import * as S from "./style";
import {TextInputProps} from "react-native";

type Props = TextInputProps
const Input= ({...rest}:Props) => {
  return (
    <S.Container {...rest} />
  );
}

export default Input;