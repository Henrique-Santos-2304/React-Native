import React,{createContext, useContext, useEffect, useState} from 'react';
import { DataTransactionProvider } from './dataTransaction';
import { 
    getUserData, 
    removeUser, 
    setUserData 
} from '../utils/asyncStorage/asyncStorage';

import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';

interface AuthProviderProps{
    children: React.ReactNode;
}

type bgProps = "light" | "dark"
interface UserProps{
    id: string;
    name: string;
    email: string;
    photo?: string | undefined;
}
interface AuthContextDataProps{
    user: UserProps;
    signInWithGoogle: () => Promise<void>;
    signInWithApple: () => Promise<void>;
    SignOut: () => Promise<void>;
    userLoading: boolean;
    backgroundToogle: bgProps;
    setBackgroundToogle: React.Dispatch<React.SetStateAction<bgProps>>;
}
const AuthDataContext = createContext({} as AuthContextDataProps)

function AuthContextProvider({children}: AuthProviderProps){
   const [user, setUser]= useState<UserProps>({}as UserProps)
   const [userLoading, setUserLoading] = useState(true)
   const [backgroundToogle, setBackgroundToogle]= useState<bgProps>('dark')

   const signInWithApple = async() =>{
    try{
       const credential = await AppleAuthentication.signInAsync({
           requestedScopes: [
               AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
               AppleAuthentication.AppleAuthenticationScope.EMAIL,
           ]
       })
       if(credential){
           const name= String(credential.fullName?.givenName!)
           const userLogged ={
            id: String(credential.user),
            email: String(credential.email!),
            name,
            photo: `https://ui-avatars.com/api/?name=${name}`
           }
           setUser(userLogged)
           await setUserData(userLogged)
       }
    }catch(error){
        throw new Error(error)
    }
   }
   const signInWithGoogle = async() =>{
    try{
        const result = await Google.logInAsync({
            iosClientId: "612722114395-4cj1rot32nn9bq3rffhn5nl7trho9q8g.apps.googleusercontent.com",
            androidClientId: "1092026567759-4gg8e2o905bg9cdck9k1r6gtr1nj6s15.apps.googleusercontent.com",
            scopes: ["profile", "email"]

        })

        if(result.type === "success"){
            const userLogged ={
                id: String(result.user.id),
                email: String(result.user.email!),
                name: String(result.user.name!),
                photo: String(result.user.photoUrl!)
            }
            setUser(userLogged)
            await setUserData(userLogged);
        }
    }catch(error){
        throw new Error(error)
    }
   }

   const SignOut = async() =>{
    setUser({} as UserProps)
    await removeUser()
   }
   
   const loadUserStorage = async () =>{
    const dataUser = await getUserData()
    if(dataUser){
        const userLogged = JSON.parse(dataUser) as UserProps;
        setUser(userLogged)
    }
    setUserLoading(false)
   }

   useEffect(()=> {
       loadUserStorage()
   },[])

    return(
        <AuthDataContext.Provider value={{
            user, signInWithGoogle, signInWithApple, SignOut, userLoading,
            backgroundToogle, setBackgroundToogle
            }}>
            <DataTransactionProvider>
                {children}
            </DataTransactionProvider>
        </AuthDataContext.Provider>
    )
}

function useAuthContext(){
    const context = useContext(AuthDataContext)
    return context
}
export { useAuthContext, AuthContextProvider, AuthDataContext }