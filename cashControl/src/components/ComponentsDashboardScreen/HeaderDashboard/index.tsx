import React from 'react';
import { useAuthContext } from '../../../hooks/authContext';
import ButtonToggle from '../../GlobalComponents/ButonToggle';
import * as S from "./style";

const HeaderDashboard = () => {
  const {SignOut, user } = useAuthContext()
  return (
    <S.Header>
        <S.userContent>

          <S.UserInfo>

            <S.ImageUser 
            source={{
              uri: user.photo
            }}
            />

            <S.ContentTitle>
              <S.Welcome>olá,</S.Welcome>
              <S.Name>{user.name}</S.Name>
            </S.ContentTitle>

          </S.UserInfo>
          <S.LogoutButton onPress={SignOut}>
            <S.IconPower name='power'/>
          </S.LogoutButton>
        </S.userContent>
       
        
      </S.Header>
  );
}

export default HeaderDashboard;