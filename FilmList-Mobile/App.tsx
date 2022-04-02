import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as S from "./styles/app"
import CardBox from './src/components/CardBox';
import api from './src/components/services/api/api';
import {FlatList, ListRenderItemInfo} from "react-native";

type film = {
    foto: string;
    id: number;
    nome: string;
    sinopse: string;
}

export default function App() {
  const [films, setFilms]= useState<film[]>([])

  useEffect(()=>{
    async function getUrl(){

      const response = await api.get('r-api/?api=filmes');
      setFilms(response.data)
    }
    getUrl()
  },[])

  
  return (
    <S.Container >
      <S.ListFilms>
        <FlatList
          data={films}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <CardBox data={item} />}
        />
        </S.ListFilms>
    </S.Container>
  );
}


