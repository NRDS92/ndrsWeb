import { createContext, useState } from "react";


export const ModalContext = createContext({})

export function ModalProvider({children}){
    const [showModal, setShowModal] = useState(false)

    const openModal = ()=>{
        setShowModal(true)
    }
    const closeModal = ()=>{
        setShowModal(false)
    }



    const value ={
        openModal,
        closeModal,
        showModal
        
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}