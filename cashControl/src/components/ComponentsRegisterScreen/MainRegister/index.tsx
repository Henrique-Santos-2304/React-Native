import React, { useEffect, useState } from 'react';
import * as S  from './style';

import {Modal} from "react-native";
import {useForm} from "react-hook-form";
import  uuid from "react-native-uuid";
import {yupResolver} from "@hookform/resolvers/yup";

import {schema, categoryData} from "../../../utils/validateForm"
import { AdmobBanner, showBannerPropag } from '../../GlobalComponents/Admob';

import MainForms from '../Forms/MainForms';
import Button from '../Forms/Button';
import Categories from '../../../screens/Categories';
import {setDataStorage } from '../../../utils/asyncStorage/asyncStorage';
import { useAuthContext } from '../../../hooks/authContext';

interface InputForm {
  name:string;
  amount: number
}
const dataCategory ={
  setTrasanctionTypeError: false,
  category: false
}

const MainRegister= ({navigation}) => {
  
  const [categoryModalVisible, setCategoryModalVisible]= useState(false)
  const [category, setCategory] = useState(categoryData)
  const [transactionType, setTransactionType]= useState('');
  const [errorCategoryTransaction, setErrorCategoryTransaction]= useState(dataCategory);

  const {user } = useAuthContext()

  const {control, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const handleFormData = async (form: InputForm)=> {
    await showBannerPropag() //Propaganda Full Screen

    if(!transactionType){
      setErrorCategoryTransaction(
        {...errorCategoryTransaction, setTrasanctionTypeError:true } )
        return
    }
    if(category.key === "category"){
      setErrorCategoryTransaction(
        {...errorCategoryTransaction, category: true} )
        return
    }
    const newTransaction={
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }
    setErrorCategoryTransaction(dataCategory)
    await setDataStorage(newTransaction, user.id) //Async Storage retorno de dados
    reset()
    setTransactionType('')
    setCategory(categoryData);

    navigation.navigate("Home", {name: "Listagem"})
  }
 

  return (
      <S.Container>

        <MainForms 
          transactionType={transactionType}
          setTransactionUp={()=>setTransactionType('up')}
          setTransactionDown={()=>setTransactionType('down')}
          category={category.name}
          onOpenModalCategory={() => setCategoryModalVisible(true)}
          control={control}
          errorName={errors.name && errors.name.message}
          errorAmount={errors.amount && errors.amount.message}
          errorCategoryTransaction={errorCategoryTransaction}
        />
        <S.ContentButton>
          <Button title="Enviar" onPress={handleSubmit(handleFormData)}/>
        </S.ContentButton>
        <Modal visible={categoryModalVisible}>
          <Categories 
            nameCategory={category}
            setCategory= {setCategory}
            closeSelectCategory={() => setCategoryModalVisible(false)}
          />
        </Modal>
      
      </S.Container>
    );
}

export default MainRegister;
