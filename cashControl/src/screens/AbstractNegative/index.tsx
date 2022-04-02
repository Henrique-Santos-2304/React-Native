import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import { useFocusEffect } from '@react-navigation/core';

import SafeAreComponent from '../../components/GlobalComponents/SafeAreComponent';
import BlurView from '../../components/GlobalComponents/BlurView';

import { filterDataStorage } from '../../utils/handleAbstractData';import { useDataTRansactions } from '../../hooks/dataTransaction';
import { useAuthContext } from '../../hooks/authContext';
import ResumeMain from '../../components/ComponentResum/ResumeMain';
import { AdmobBanner, showBannerPropag } from '../../components/GlobalComponents/Admob';
;

export interface PropsAbstractData{
  name: string;
  total: string;
  color: string;
  percentage: string;
  percentFormatted: number

}

const AbstractNegative= () => {
  const [selectedData, setSelectedData] = useState(new Date())
  const [categorySum, setCategorySum]= useState<PropsAbstractData[]>([])

  const {setIsloading}= useDataTRansactions()
  const {user} = useAuthContext()


  useFocusEffect(useCallback(()=> {
    async function getData(){
      setIsloading(true)
      
      const response = 
        await filterDataStorage("negative",selectedData, user.id)
        response ? setCategorySum(response) : setCategorySum([])
      setIsloading(false)
    }
    
    getData()
  },[selectedData]))
  
  return( 
    <SafeAreComponent>
      <S.Container>
        <BlurView tintType="light" intensityBlur={7} > 
          <ResumeMain 
            textTitle="Resumo de Saída"
            categorySum={categorySum} 
            setSelectedData={setSelectedData}
            selectedData={selectedData}          
          />
          <AdmobBanner />
        </BlurView>
      </S.Container>
    </SafeAreComponent>
  )
}

export default AbstractNegative;