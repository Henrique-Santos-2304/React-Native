import styled from 'styled-components/native';
import { BlurView } from 'expo-blur';

interface PropsStyle{
  radius?: string
}
export const Container = styled(BlurView)<PropsStyle>`
  width: 100%;
  height: 100%;
  border-radius: ${({radius}) => radius ? radius : 0}; 
`;

export const Image= styled.Image<PropsStyle>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({radius}) => radius ? radius : 0};
  
`;