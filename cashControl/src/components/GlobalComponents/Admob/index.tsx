import React from 'react';
import * as S from "./styles";

import {
    AdMobBanner,
    AdMobInterstitial,
  } from 'expo-ads-admob';

const AdmobBanner= () => {
    return (
    <S.ViewAdMob> 
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(error)=> console.log(error)} 

        />
    </S.ViewAdMob>
    );
}

const showBannerPropag= async() =>{
    try{
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); 
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
      await AdMobInterstitial.showAdAsync();
    }catch(error){
      console.log(error)
    }
  }

export {AdmobBanner, showBannerPropag};