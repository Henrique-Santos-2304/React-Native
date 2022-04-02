import { getDataStorage, PropsSetData } from './asyncStorage/asyncStorage'
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { Alert } from 'react-native';


function convertAmount(number: Number){
    const numberConverted = number.toLocaleString('pt-BR',{
        style: "currency", currency: "BRL"
    })
    return numberConverted
}

function lastTransactionConvert(array: PropsSetData[]){
    const date = array.map((item:PropsSetData) => new Date(item.date).getTime())
    const result = new Date(Math.max.apply(Math, date))

    const resultFormatted = 
    `${result.getDate()} de ${result.toLocaleString('pt-BR', {month: "long"})}`

    return resultFormatted
};

export const handleHighLightCard = async(userId: string)=>{
    try{
        const data : PropsSetData[] = await getDataStorage(userId)

        if(data && data.length !== 0){
            const positive = data.filter(
                (item:PropsSetData) => item.transactionType === "up")

            const negative = data.filter(
                (item:PropsSetData) => item.transactionType === "down")
        
            const entriesSum = positive.reduce(
            (acum, item:PropsSetData)=> acum + item.amount ,0)
            const expensive = negative.reduce(
            (acum, item:PropsSetData)=> acum + item.amount ,0)
          
            const amountPositive = convertAmount(entriesSum).replace('$', "$ ")          
            const amountNegative = convertAmount(expensive).replace('$', "$ ") 
            const amountTotal = convertAmount(entriesSum - expensive)
        
            const lasTRansactionsEntries = 
                positive.length !== 0 && lastTransactionConvert(positive) 
            const lasTRansactionsExpensive = 
                negative.length !== 0 && lastTransactionConvert(negative)
             
            return {
                amountPositive: amountPositive ? amountPositive : "R$ 0,00", 
                amountNegative: amountNegative ? amountNegative : "R$ 0,00", 
                amountTotal: amountTotal ? amountTotal : "R$ 0,00",
                lasTRansactionsEntries,
                lasTRansactionsExpensive
                }
                
        }else{
            return {
                amountPositive:  "R$ 0,00", 
                amountNegative:  "R$ 0,00", 
                amountTotal: "R$ 0,00",
                lasTRansactionsEntries: null,
                lasTRansactionsExpensive: null
            }
        }
    
    }catch(error){
        Alert.alert("Não foi possivel carregar o saldo")
    }

    
}
