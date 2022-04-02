import React, { useState } from 'react';
import { VictoryPie } from 'victory-native';
import theme from '../../../global/theme';

import { useDataTRansactions } from '../../../hooks/dataTransaction';
import { PropsAbstractData } from '../../../screens/AbstractNegative';
import { AdmobBanner } from '../../GlobalComponents/Admob';
import HeaderComponents from '../../GlobalComponents/HeaderComponents';
import LoadingComponent from '../../GlobalComponents/LoadingComponent';
import HistoryCard from '../HistoryCard';
import MonthList from '../MonthList';

import * as S from "./styles";

interface Props{
    categorySum: PropsAbstractData[];
    setSelectedData: React.Dispatch<React.SetStateAction<Date>>;
    selectedData: Date
    textTitle: string;
}
const ResumeMain= ({
    categorySum, 
    setSelectedData, 
    selectedData,
    textTitle
 }: Props) => {
    const {isLoading}= useDataTRansactions()

    return (
        <>
        {isLoading ? <LoadingComponent /> : 
          <>
          <HeaderComponents text={textTitle} />

          <S.ContentList>

              <MonthList 
                nextOrPrevMonth={setSelectedData} 
                selecteDate={selectedData}
              />
              {categorySum.length === 0 
            ? 
                <S.WarningNoData>
                  Nenhuma Transação{"\n"} para o Periodo
                </S.WarningNoData>
              :
              <>
                <VictoryPie
                  width={450}
                  height={320}
                  data={categorySum}
                  colorScale={categorySum.map(cat => cat.color)}
                  style={{
                    labels: {
                      fontWeight: "bold", fill: theme.colors.primary}
                  }}
                  labelRadius={50} innerRadius={18}
                  x="percentFormatted"
                  y="total"
                />

              
              <S.TransactionsList
                data={categorySum}
                keyExtractor={(item) => item.name}
                renderItem={( {item} )=> 
                  <HistoryCard 
                    title={item.name} 
                    color={item.color} 
                    amount={item.total} />
                }
              />
            </>}

          </S.ContentList>
          </>
          }
        </>
    );
}

export default ResumeMain;