import React from 'react';
import * as S from "./styles";
import { addMonths, subMonths, format } from 'date-fns';
import {ptBR} from "date-fns/locale";

interface Props{
    nextOrPrevMonth: React.Dispatch<React.SetStateAction<Date>>
    selecteDate: Date
}
const MonthList= ({nextOrPrevMonth, selecteDate}: Props) => {

    const handleDataChange = (action: "next" | "prev")=> {
        if(action === "next"){
          const newDate = addMonths(selecteDate, 1)
          nextOrPrevMonth(newDate)
        }else{
          const newDate = subMonths(selecteDate, 1)
          nextOrPrevMonth(newDate)
        }
    }
    const dateFormatted = 
        format(selecteDate, "MMMM,  yyyy",{locale: ptBR}).toUpperCase()
        
    return (
        <S.MonthSelect>

        <S.MonthSelectButton onPress={() => handleDataChange('prev')}>
          <S.MonthIcon name="chevron-left"/>
        </S.MonthSelectButton>

        <S.Month>{dateFormatted}</S.Month>

        <S.MonthSelectButton onPress={() => handleDataChange('next')} >
          <S.MonthIcon name="chevron-right"/>
        </S.MonthSelectButton>

      </S.MonthSelect>
    );
}

export default MonthList;