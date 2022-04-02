import React, { useEffect, useState } from 'react';
import  ModalSinopse  from '../ModalSinopse';
import api from '../services/api/api';
import * as S from "./style";

// import { Container } from './styles';
type film = {
  data: {
    foto: string;
    id: number;
    nome: string;
    sinopse: string;
  },
}

const CardBox= ({data}: film) => {
  const [modalVisible, setModalVisible]=useState(false)

  return (
  <S.Container >
    <S.View>
      <S.TitleImages>{data.nome}</S.TitleImages>
      <S.Image 
      source={{uri: data.foto}}
      />
    </S.View>

    <S.Button onPress={()=> setModalVisible(true)}>
      <S.TextButton>Ver Mais</S.TextButton>
    </S.Button>

    {/* Modal Sinopse */}
   <ModalSinopse 
   modalVisible={modalVisible} 
   closeModal={()=> setModalVisible(false)}
   sinopse={data.sinopse}
   image={data.foto}
   />
  </S.Container>
  )
}

export default CardBox;