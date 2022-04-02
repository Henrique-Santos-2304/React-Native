import React, { memo, useState } from 'react';
import * as Animatable from 'react-native-animatable';

import * as S from "./style";
import CardsTransactions from '../CardsTransactions';
import { useDataTRansactions } from '../../../../hooks/dataTransaction';
import { useAuthContext } from '../../../../hooks/authContext';
import { deleteAllDataStorage } from '../../../../utils/asyncStorage/asyncStorage';
import DeleteAll from './DeleAll';



const MainTransaction= () => {
  const [modalDeleteAll, setmodalDeleteAll] = useState(false)
  const {data} = useDataTRansactions()
  const {user} = useAuthContext()
  return (
    <S.Container>
      <S.TitleContent>
        <S.Title>Extrato</S.Title>

        <S.RemoveAllTransactions onPress={() => setmodalDeleteAll(true)}>
          <S.IconDelete name="delete" colors="#f8f8f8"/>
        </S.RemoveAllTransactions>

        {modalDeleteAll && 
          <S.Modal testID="modal-delete-transaction">
            <DeleteAll 
              closeModal={()=> setmodalDeleteAll(false)} 
              />
          </S.Modal>}
      </S.TitleContent>

      <Animatable.View 
          animation="fadeInUp" 
          duration={4000} 
          > 
        <S.TransactionsList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={( {item} )=> <CardsTransactions 
            data={item} 
          />}
        />
      </Animatable.View>
    </S.Container>
  );
}

export default memo(MainTransaction, (prevState, proState)=>{
  return Object.is(prevState, proState)
});