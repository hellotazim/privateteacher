"use client"

import {createContext, useState, useContext } from "react";
import Cookies from "js-cookie";
import {useRouter} from "next/navigation";

const AppContext = createContext();


export function AppWrapper({children}){

    const router = useRouter();
    let [activeTheme, setActiveTheme] = useState('default');



    const signOut = () => {
        Cookies.remove('auth', {path: '/'})
        router.push('/')
    }



    return (
        <AppContext.Provider value={{
            activeTheme,
            setActiveTheme,
            signOut
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}