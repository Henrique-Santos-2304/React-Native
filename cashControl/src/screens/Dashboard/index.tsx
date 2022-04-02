import React, { memo, useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { useDataTRansactions } from '../../hooks/dataTransaction';
import * as S from "./style";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import SafeAreComponent from '../../components/GlobalComponents/SafeAreComponent';
import BlurView from '../../components/GlobalComponents/BlurView';
import HeaderDashboard from '../../components/ComponentsDashboardScreen/HeaderDashboard';
import ViewBalance from '../../components/ComponentsDashboardScreen/ViewBalance';
import MainCards from '../../components/ComponentsDashboardScreen/HighlightCards/MainCards';
import MainTransaction from '../../components/ComponentsDashboardScreen/Transactions/MainTransaction';
import LoadingComponent from '../../components/GlobalComponents/LoadingComponent';
import { useAuthContext } from '../../hooks/authContext';
import { AdmobBanner } from '../../components/GlobalComponents/Admob';
import ButtonToggle from '../../components/GlobalComponents/ButonToggle';

const Dashboard = () => {
  const [balanceVisible, setBalanceVisible]= useState(false);
  const [animateBalance, setAnimateBalance]= useState(false);

  const {handleData, isLoading}=useDataTRansactions()
  const {user} = useAuthContext()

  const handleBalanceOpenClose = ()=>{
    if(!balanceVisible){
      setAnimateBalance(true)
      setBalanceVisible(true)
    }else{
      setAnimateBalance(false);
      setTimeout(() => {
        setBalanceVisible(false)
      }, 1250);
    }
  }


  useFocusEffect(useCallback(()=>{
    handleData(user.id)
  },[]))

  return (
      <SafeAreComponent>
        <S.Container>
          <BlurView 
            tintType="light"
            intensityBlur={8}
            >
            {isLoading ? <LoadingComponent /> : 
            <>
              <S.View balanceVisible={balanceVisible}>
    
                <HeaderDashboard />
              
                <S.ContentToogle>
                  <ViewBalance 
                    balanceVisible={balanceVisible}
                    setBalanceVisible={handleBalanceOpenClose}
                    />

                  <ButtonToggle />

                </S.ContentToogle>
                
                {balanceVisible && <MainCards balanceVisible={animateBalance}/>}
    
                </S.View>
              
              <MainTransaction />
            </>
          }
           <AdmobBanner />
          </BlurView>
  
        </S.Container>
      </SafeAreComponent>
  );
}

export default memo(Dashboard, (prevState, proState)=>{
  return Object.is(prevState, proState)
});