import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import { CategoryItemsProps } from '../../utils/catgories';
import {GestureHandlerRootView} from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
${({theme})=> css`
  flex: 1;
  background: ${theme.colors.primary};
`}
`;

export const CategoryList = styled(
  FlatList as new () => FlatList<CategoryItemsProps>
  )`

  `
export const Separator=styled.View`
  width: 100%;
  height: 20px;
`
export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`
