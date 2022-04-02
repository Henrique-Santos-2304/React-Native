import { Alert } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface PropsSetData{  
        id: string;
        name: string;
        amount: number;
        transactionType: string;
        category: string;
        date: Date
}
export interface UserDataprops{
    email: string;
    id: string;
    name: string;
    photo: string;
  
}
export const dataKey= "@cashControl:transactions_userId";
const userKey = "@cashControl:user"

export const setUserData = async (userData: UserDataprops) => {
    try{
        await AsyncStorage.setItem(userKey, JSON.stringify(userData))
    }catch(error){
        console.log(error)
    }
}

export const getUserData = async () =>{
    try{
        const data = await AsyncStorage.getItem(userKey)
        return data
    }catch(error){
        console.log(error)
    }

}

export const removeUser = async () =>{
    try{
        await AsyncStorage.removeItem(userKey)
    }catch(error){
        console.log(error)
    }
}

export const setDataStorage = async(newTransaction: PropsSetData, userId: string) => {
    const keyData = `${dataKey}:${userId}`
    try{    
        const beforeData = await AsyncStorage.getItem(keyData)
        const currentData = beforeData ? JSON.parse(beforeData) : []
  
        const dataFormatted =[
          ...currentData,
          newTransaction
        ]
        await AsyncStorage.setItem(keyData, JSON.stringify(dataFormatted))

      }catch(error){
        console.log(error);
        return Alert.alert("Não foi possível salvar seus dados")
      }
}

export const getDataStorage = async(userId: string) => {  
    const keyData = `${dataKey}:${userId}`
    try{ 
        const beforeData = await AsyncStorage.getItem(keyData)

        if(!beforeData || beforeData.length === 0){
            return 
        }else{
            return await JSON.parse(beforeData)
        }       
    }catch(error){
        console.log(error)
        Alert.alert('Não Foi possível buscar os dados')
    }
}

export const deleteAllDataStorage= async(userId: string) => {
    const keyData = `${dataKey}:${userId}`

    try{
        await AsyncStorage.removeItem(keyData)
        return "ok"
    }catch(error){
        console.log(error)
        return "error"
    }
}

export const deleteOneDataStorage= async(itemId: string, userId:string) => {
    const keyData = `${dataKey}:${userId}`
    try{
        const beforeData = await AsyncStorage.getItem(keyData)
        const itemremove = JSON.parse(beforeData)
            .filter(item => item.id !== itemId)

            await AsyncStorage.setItem(keyData,JSON.stringify(itemremove))

            return "ok"

    }catch(error){
        console.log(error)
        Alert.alert('Não foi possível deletar os dados')
        return "error"
    }
}