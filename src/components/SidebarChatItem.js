import React,{ useContext} from 'react'
import { ChatContext } from '../context/chat/chatContext'
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';
import { types } from '../types/types';

export const SidebarChatItem = ({usuario}) => {

    const {chatState, dispatch} = useContext(ChatContext);
    const {chatActivo} = chatState;

    
    const onClick = async () =>{
        
        dispatch({
            type: types.activarChat,
            payload:usuario.uid,
        });

        // Cargas los mensajes del chat
        const resp= await fetchConToken(`mensajes/${usuario.uid}`);
    
        dispatch({
            type:types.cargarMensajes,
            payload:resp.mensajes,
        });
        
        scrollToBottom('mensajes')
        
            

    }

    return (
            <div 
                className={`chat_list ${ (usuario.uid === chatActivo) && 'active_chat'}`}
                onClick={onClick}
            >
                {/* active_chat */}
                <div className="chat_people">
                    <div className="chat_img"> 
                        <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-sweet-girl-user-avatar-material-image_1341332.jpg" alt="sunil" />
                    </div>
                    <div className="chat_ib">
                        <h5>{usuario.name}</h5>
                        {
                            (usuario.online)
                                ? <span className="text-success">Online</span>
                                : <span className="text-danger">Offline</span>
                        }
                        
                        
                    </div>
                </div>
            </div>
    )
}