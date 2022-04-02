import React, { memo, useState } from 'react';
import * as S from "./style";

import { ReturnDataprops } from '../../../../utils/handleDataListBalance';

import BlurView from '../../../GlobalComponents/BlurView';
import DeleteTransaction from '../../../GlobalComponents/DeleteTransaction';

interface Data {
  data: ReturnDataprops
}

const CardsTransactions = ({ data }: Data) => {
  const [modalDeleteTransaction, setModalDeleteTransaction]= useState(false)
  const [itemDelete, setItemDelete] = useState('')

  const handleDeleteSelectItem = (itemId: string) => {
    setModalDeleteTransaction(true)
    setItemDelete(itemId)
  }

  return (
    <S.Container>
      <BlurView tintType="light" intensityBlur={90} radius="8px">
        <>
        <S.ContentTransactionList>

          <S.ContentTitle >
            <S.Title>{data.name}</S.Title>

            <S.ButtonDelete 
              onPress={() => 
              handleDeleteSelectItem(data.id) }
              testID="button-remove-transaction"
              >
              <S.IconDelete name="delete"></S.IconDelete>
            </S.ButtonDelete>

          </S.ContentTitle>

          <S.Amount type={data.type}>
            {data.type === "negative" && "- "}
            {data.amount}
          </S.Amount>

          <S.Footer>

            <S.Category>
              <S.Icon name={data.icon.icon} color={data.icon.color} />
              <S.CategoryName>{data.icon.name}</S.CategoryName>
            </S.Category>

            <S.Date>{data.date}</S.Date>

          </S.Footer>

          </S.ContentTransactionList>
          
          {modalDeleteTransaction && 
          <S.Modal testID="modal-delete-transaction">
            <DeleteTransaction 
              itemSelectDelete={itemDelete} 
              closeModal={()=> setModalDeleteTransaction(false)} 
              setItemDelete={() => setItemDelete('')}
              />
          </S.Modal>}

            </>
      </BlurView>
    </S.Container>


  );
}

export default memo(CardsTransactions, (prevState, proState)=>{
  return Object.is(prevState, proState)
});
