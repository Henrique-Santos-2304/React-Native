import React, { memo } from 'react';
import * as S  from './style';

import {Control} from "react-hook-form"

import TransactionTypeButton from '../TransactionTypeButton';
import CategorySelect from '../CategorySelect';
import InputForm from '../InputForm';
import Errors from '../Errors';

type CategoryTtransaction ={
  setTrasanctionTypeError: boolean;
  category: boolean
};

interface Props {
  onOpenModalCategory: () => void;
  setTransactionUp: () => void;
  setTransactionDown: () => void;
  category: string;
  errorCategoryTransaction: CategoryTtransaction;
  transactionType: string;
  control: Control;
  errorName: string;
  errorAmount: string
};

const MainForms = ({
   category, control , transactionType, errorName, errorAmount,
   setTransactionUp, setTransactionDown, onOpenModalCategory,
   errorCategoryTransaction
  }: Props) => {
  
  return (
    <S.Container>
  
      <InputForm 
        name="name"
        control={control}
        placeholder="Nome" 
        autoCapitalize="sentences"
        autoCorrect={false}
        error={errorName && errorName}
      />
      <InputForm 
        name="amount"
        control={control}
        placeholder="Preço"
        keyboardType="numeric"
        error={errorAmount && errorAmount}
      />

      <S.TransactionsType>

          <TransactionTypeButton 
            type="up" 
            title="Entrada" 
            isActive={transactionType === "up"} 
            onPress={setTransactionUp}
          />
      
        <TransactionTypeButton 
          type="down" 
          title="Saída"
          isActive={transactionType === "down"} 
          onPress={setTransactionDown}
        />

      </S.TransactionsType>
      {errorCategoryTransaction.setTrasanctionTypeError && <Errors 
              msgError="Selecione uma Transação"
            />}

      <CategorySelect 
        title={category} 
        onPress={onOpenModalCategory}
      />
      {errorCategoryTransaction.category && <Errors 
              msgError="Selecione uma Categoria"
            />}

    </S.Container>
  );
}

export default memo(MainForms, (prevState, proState)=>{
  return Object.is(prevState, proState)
});