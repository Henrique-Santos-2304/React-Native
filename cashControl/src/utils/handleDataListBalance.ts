import { Alert } from 'react-native'
import { getDataStorage, PropsSetData } from './asyncStorage/asyncStorage'
import {categories, CategoryItemsProps} from "./catgories";

type PropType = "positive" | "negative"

export interface ReturnDataprops {
    amount: string;
    category: string;
    date: string;
    id: string;
    name: string;
    type: string
    icon: CategoryItemsProps
}

export const handleDataBalance = async(userId: string) => {
    try{ 
        const dataResponse :PropsSetData[] = await getDataStorage(userId)
        if(dataResponse && dataResponse.length !== 0){
          const transactionFormatted= dataResponse
            .map((item: PropsSetData) => {
              const amount= item.amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).replace('$', "$ ")
        
                const date = Intl.DateTimeFormat('pt-BR',{
                  day: "2-digit", 
                  month: "2-digit", 
                  year: "2-digit"
                }).format(new Date(item.date))

                const icon = categories.filter(icon => icon.key === item.category )
                const type:PropType = item.transactionType === "up" ? "positive" : "negative"
        
                return { 
                  id: item.id,
                  amount, 
                  type,
                  category: item.category,
                  date, 
                  name: item.name,
                  icon: icon[0],
                }
            })  
          return transactionFormatted
        }else{
          return
        }
    }catch(error){
      console.log(error)
      Alert.alert('Não foi possível formatar os dados')
    }
}