import React,{createContext, useReducer} from 'react'
import { ChatReducer } from './chatReducer';

export const ChatContext = createContext();


 const initialState ={

     uid: '',
     chatActivo: null, ////al que voy a enviar mensaje
     usuarios: [], /////todos los usuarios
     mensajes: [], ///chat seleccionado

 }



export const ChatProvider = ({children}) => {

    const [ chatState, dispatch] = useReducer(ChatReducer, initialState)

    

    return (
        
        <ChatContext.Provider value={{

            chatState,
            dispatch

        }}>
            {children}
        </ChatContext.Provider>
    )
}
