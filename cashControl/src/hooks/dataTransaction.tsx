import React,{createContext, useContext, useState} from 'react';
import { Alert } from 'react-native';
import { handleDataBalance, ReturnDataprops } from '../utils/handleDataListBalance';
import { handleHighLightCard } from '../utils/handleHighlightCard';

interface DataTransactionProps{
    children: React.ReactNode;
}
export interface DataHighLightCardprops {
    amountPositive: string,
    amountNegative: string,
    amountTotal: string,
    lasTRansactionsEntries: null | string,
    lasTRansactionsExpensive: null | string
}

const dataAmount = {
    amountPositive: "R$ 0,00",
    amountNegative: "R$ 0,00",
    amountTotal: "R$ 0,00",
    lasTRansactionsEntries: null,
    lasTRansactionsExpensive: null
}

interface ContextProps{
    data: ReturnDataprops[];
    setData: React.Dispatch<React.SetStateAction<ReturnDataprops[]>>;
    handleData: (userId: string) => Promise<void>;
    amount: DataHighLightCardprops; 
    getHighlightCardAMount:(userId:string) => Promise<void>;
    isLoading: boolean; 
    setIsloading: React.Dispatch<React.SetStateAction<boolean>>;
}
const DataTransactionContext = createContext<ContextProps>({} as ContextProps)


function DataTransactionProvider({children}:DataTransactionProps){
    const [data, setData] = useState<ReturnDataprops[]>([])
    const [isLoading, setIsloading] = useState(true)

    const [amount, setAmount]= useState<DataHighLightCardprops>(dataAmount)

    const handleData= async(userId: string)=> {
        try{
            !isLoading &&  setIsloading(true)
            const dataStorage = await handleDataBalance(userId)
            setData(dataStorage)
            getHighlightCardAMount(userId)

        }catch(error){
            console.log(error)
            Alert.alert('Erro ao carregar os dados das Transações')
        }finally{
            setIsloading(false)
        }
    } 
    const getHighlightCardAMount= async(userId: string)=>{
        try{
            const dataAmount = await handleHighLightCard(userId)
            setAmount(dataAmount)
        }catch(error){
            console.log(error)
            Alert.alert('Erro ao carregar o saldo')
        }finally{
            setIsloading(false)
        }
    }

   
   
    return(
        <DataTransactionContext.Provider 
            value={{
                data, setData, handleData,
                amount, getHighlightCardAMount,
                isLoading, setIsloading
            }}
        >
            {children}
        </DataTransactionContext.Provider>
    )
}

function useDataTRansactions(){
    const context = useContext(DataTransactionContext)
    return context
}
export { DataTransactionProvider, useDataTRansactions, DataTransactionContext }