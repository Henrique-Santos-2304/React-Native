import React from 'react';
import * as S from './style';

interface Props {
    balanceVisible: boolean;
    setBalanceVisible: () => void;
}

const ViewBalance = ({balanceVisible, setBalanceVisible}: Props) => {
  return (
    <S.EyeBalanceVisible onPress={setBalanceVisible}>
        <S.BalanceText>
        {balanceVisible ? "Esconder Saldo" : "Ver Saldo"}
        </S.BalanceText>
        <S.IconEye 
        name={balanceVisible ? "eye-off" : "eye"}
        />
    </S.EyeBalanceVisible>
  );
}

export default ViewBalance;