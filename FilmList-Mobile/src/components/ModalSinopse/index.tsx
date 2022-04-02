import React from 'react';
import { View } from 'react-native';
import * as S from "./style";

// import { Container } from './styles';
type props = {
  modalVisible: boolean,
  closeModal: () => void,
  sinopse: string;
  image:string
}
const ModalSinopse= ({modalVisible, closeModal, sinopse, image}: props) => {
  return (
    <S.ModalSinopse 
    animationType="slide"
    visible={modalVisible}
  > 

    <S.ViewSinopse>

      <S.ButtonModalClose onPress={closeModal}> 
        <S.TextButton>Fechar</S.TextButton>
      </S.ButtonModalClose>

      <S.Image 
      source={{uri: image}}
      />

      <S.TextSinopse>
        {sinopse}
      </S.TextSinopse>

    </S.ViewSinopse>

  </S.ModalSinopse>
  );
}

export default ModalSinopse;