import React from 'react';
import * as S from './style';

import SafeAreComponent from '../../components/GlobalComponents/SafeAreComponent';
import BlurView from '../../components/GlobalComponents/BlurView';
import HeaderComponents from '../../components/GlobalComponents/HeaderComponents';
import Category from '../../components/ComponentsRegisterScreen/Category';
import Button from '../../components/ComponentsRegisterScreen/Forms/Button';

import {categories, CategoryItemsProps} from "../../utils/catgories";
import { AdmobBanner } from '../../components/GlobalComponents/Admob';

type Category = Pick<CategoryItemsProps, "key" | "name">

interface Props{
  nameCategory: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const Categories= ({nameCategory, setCategory, closeSelectCategory}: Props) => {
  return (
    <SafeAreComponent>
      <S.Container>
        <BlurView tintType="light" intensityBlur={7} >

          <HeaderComponents text="Categorias" />
          <S.Separator />
          
          <S.CategoryList 
            data={categories}
            keyExtractor={item => item.key}
            renderItem={({item})=> <Category 
              icon={item.icon} 
              name={item.name} 
              color={item.color}
              onPressCallback={()=> setCategory(item)}
              isActive={nameCategory.key === item.key}/>
              }
          />

          <S.Footer>
            <Button title="Selecionar" onPress={closeSelectCategory}/>
          </S.Footer>
          
          <AdmobBanner />
          
        </BlurView>
      </S.Container>
    </SafeAreComponent>
  );
}

export default Categories;