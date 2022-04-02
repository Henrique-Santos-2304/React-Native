import React, { memo } from 'react';
import * as S from "./style";

import HighlightCard from '../HighlightCard';
import {
   DataHighLightCardprops, 
   useDataTRansactions 
  } from '../../../../hooks/dataTransaction';

interface Props{
  balanceVisible: boolean;
}
interface PropsAmount {
  amount: DataHighLightCardprops,
}

const MainCards = ({balanceVisible}: Props) => {
  const { amount }:PropsAmount = useDataTRansactions()
  
  return (
    <S.HighLighCards testID="container-card">
        <S.FadeInAnimateCard
          animation={balanceVisible ? "fadeInRightBig" : "fadeOutRightBig" }
          duration= {2000} >
          <S.ContainerCards testID="wrapper-cards">

            <HighlightCard
              type="up"
              title="Entrada"
              amount={amount.amountPositive}
              lastTransaction=
                {amount.lasTRansactionsEntries
                  ? `Última entrada dia ${amount.lasTRansactionsEntries}`
                  : "Nenhuma Transação encontrada"}
            />

            <HighlightCard
              type="down"
              title="Saida"
              amount={amount.amountNegative }
              lastTransaction=
                {amount.lasTRansactionsExpensive
                  ? `Última saída dia ${amount.lasTRansactionsExpensive}`
                  : "Nenhuma Transação encontrada"}
            />

            <HighlightCard
              type="total"
              title="Total"
              amount={amount.amountTotal}              
              lastTransaction=
                {amount.lasTRansactionsEntries
                  ? `01 a ${amount.lasTRansactionsEntries}`
                  : "01 a 16"}
            />

          </S.ContainerCards>

      </S.FadeInAnimateCard>
    </S.HighLighCards>
  );
}

export default memo(MainCards, (prevState, proState)=>{
  return Object.is(prevState, proState)
});

