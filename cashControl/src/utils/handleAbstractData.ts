import { Alert } from 'react-native'
import { getDataStorage, PropsSetData } from './asyncStorage/asyncStorage'
import { categories } from './catgories'

type propType =  "positive" | "negative";

const handleTransformedData = (expensive:PropsSetData[] ) => {
    const expensiveTotal = expensive.reduce((acc, expensiveItem) => {
        return acc + expensiveItem.amount 
    },0 )

    const totalByCategory = []
    categories.forEach(category => {
        let categorySum = 0

        expensive.forEach(expensive => {
            if(expensive.category === category.key) categorySum += expensive.amount
        })
        const totalFormatted = categorySum.toLocaleString('pt-BR', {
            style: "currency", currency: "BRL"}).replace('$', "$ ")
        
        const percentage = String((categorySum / expensiveTotal * 100))
        const percentFormatted = Number(percentage).toFixed(0)+ "%"
        
        categorySum > 0 &&  totalByCategory.push({
            name: category.name,
            total: totalFormatted,
            color: category.color,
            percentage,
            percentFormatted
        })    
    })
    return totalByCategory
}
export const filterDataStorage = async(
    type:propType, 
    selectedData: Date, 
    userId: string
    ) => {
    try{
        const response : PropsSetData[] = await  getDataStorage(userId)
        if(response && response.length > 0){
            const negative = response.filter(item => 
                item.transactionType === "down" && 
                new Date(item.date).getMonth() === selectedData.getMonth() &&
                new Date(item.date).getFullYear() === selectedData.getFullYear()     
                )
            const positive = response.filter(item => 
                item.transactionType === "up" && 
                new Date(item.date).getMonth() === selectedData.getMonth() &&
                new Date(item.date).getFullYear() === selectedData.getFullYear()     
                )
            
            if(type === "negative"){
                const totalFormatted = handleTransformedData(negative)
                return totalFormatted
            }else{
                const totalFormatted = handleTransformedData(positive)
                return totalFormatted
            }
        }else{
            return null
        }
    }catch(error){
        console.log(error)
        Alert.alert('Não foi possível buscar os dados')
    }
    
}