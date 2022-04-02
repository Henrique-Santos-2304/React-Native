import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const HighLighCards = styled.View`
    width: 92%;
    margin: 0 auto;
    margin-top: 22px;
`
export const FadeInAnimateCard = styled(Animatable.View)`

`
export const ContainerCards = styled.ScrollView.attrs({
  horizontal: true, 
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24, 
  },
})`
`;