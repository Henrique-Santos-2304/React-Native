import React, { useEffect } from 'react';
import * as S from './style';

import { deleteOneDataStorage } from '../../../utils/asyncStorage/asyncStorage';
import { useDataTRansactions } from '../../../hooks/dataTransaction';
import { useAuthContext } from '../../../hooks/authContext';


interface Props{
    closeModal: () => void;
    itemSelectDelete: string;
    setItemDelete: () => void;
}

const DeleteTransaction = ({itemSelectDelete, closeModal, setItemDelete }:Props) => { 
    const {handleData} = useDataTRansactions()
    const {user} = useAuthContext()

    const handleDeleteTransactionYes =  async() => {
        const response = await deleteOneDataStorage(itemSelectDelete, user.id) 
        if(response === "ok"){
            setItemDelete()
            await handleData(user.id)
        }
        }

        useEffect(()=>{
            return function cleanup(){}
          },[])
        
  return (
      <S.Container>
        <S.Text>Tem certeza que deseja deletar essa Transação? </S.Text>
        <S.ContentButton>
        
            <S.Button onPress={handleDeleteTransactionYes}>
                <S.Text> SIM </S.Text>
            </S.Button>
            <S.Button onPress={closeModal}>
                <S.Text> NÃO </S.Text>
            </S.Button>

        </S.ContentButton>            
      </S.Container>
  );
}

export default DeleteTransaction;