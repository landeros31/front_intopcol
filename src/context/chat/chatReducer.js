import { types } from "../../types/types";

export const ChatReducer = (state,action) =>{


    switch (action.type){

        case types.cerrarSesion:
            return {
                uid: '',
                chatActivo: null,
                usuarios: [],
                mensajes: []
                
            }


        case types.usuariosCargados:
            return {
                ...state,
                usuarios: [ ...action.payload]
            }

        case types.activarChat:

            if(state.chatActivo === action.payload) return state

            return {
                ...state,
                chatActivo: action.payload,
                mensajes:[]

            }    

        case types.nuevoMensaje:
            if(state.chatActivo === action.payload.from || 
                state.chatActivo === action.payload.to
                ){
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }
            }else{
                return state ;
            }

        case types.cargarMensajes:
            return {
                ...state,
                mensajes: [...action.payload]
            }

        
        
        default:
            return state;
    }
}