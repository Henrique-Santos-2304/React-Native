import React, { memo } from 'react';
import * as S from './style';

import BlurView from '../../../GlobalComponents/BlurView';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total"
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign"
}

const HighlightCard= ({
  type, title, amount, lastTransaction
}: Props) => {

  return (
    <S.Container type={type} testID="container">
        <BlurView 
          tintType={type === "total" ? "dark" : "light"}
          intensityBlur={type === "total" ? 55 : 90}
          radius="8px"
          >
          <S.View>
            <S.Header>

              <S.Title type={type} testID="card-title">
                {title}
              </S.Title>
              <S.Icon name={icon[type]} type={type} />
              
            </S.Header>

            <S.Footer >

              <S.Amount type={type} testID="amount-title">
                {amount}
              </S.Amount>

              <S.LastTransaction type={type} testID="lastTransaction-title">
                {lastTransaction}
              </S.LastTransaction>

            </S.Footer>

          </S.View>
        </BlurView>
      </S.Container>
    );
}

export default memo(HighlightCard, (prevState, proState)=>{
  return Object.is(prevState, proState)
});