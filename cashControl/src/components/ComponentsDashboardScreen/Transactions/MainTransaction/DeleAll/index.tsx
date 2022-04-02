import React from 'react';
import { useAuthContext } from '../../../../../hooks/authContext';
import { useDataTRansactions } from '../../../../../hooks/dataTransaction';
import { deleteAllDataStorage } from '../../../../../utils/asyncStorage/asyncStorage';

import * as S from "./styles";

interface Props{
    closeModal: () => void
}
const DeleteAll= ({closeModal}: Props) => {
    const {user} = useAuthContext()
    const {handleData} = useDataTRansactions()
    
    const handleDeleteTransactionYes =  async() => {
        const response = await deleteAllDataStorage(user.id) 
        if(response === "ok"){
            await handleData(user.id)
        }
    }
        
    return (
        <S.Container>
          <S.Text>Tem certeza que deseja deletar todas Transações? </S.Text>
          <S.ContentButton>
          
              <S.Button onPress={handleDeleteTransactionYes}>
                  <S.Text> SIM </S.Text>
              </S.Button>
              <S.Button onPress={closeModal}>
                  <S.Text> NÃO </S.Text>
              </S.Button>
  
          </S.ContentButton>            
        </S.Container>
    );;
}

export default DeleteAll;

