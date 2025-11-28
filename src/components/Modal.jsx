import { motion, AnimatePresence } from "framer-motion";

import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../context/ModalContext";
import {createPortal} from "react-dom"

export default function Modal({children, title }) {
    const { openModal, closeModal, showModal} = useContext(ModalContext);
    const dialog = useRef()
    
    useEffect(()=>{
        const modal = dialog.current;
        if(showModal){
            modal.showModal()
        }

        return ()=>modal.close()


    },[showModal])

    return createPortal(
        <motion.dialog 
        ref={dialog} 
        onClose={closeModal}>
            {/* Overlay */}
            <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 "
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                
                exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
                className="fixed top-1/2 left-1/2 z-50 w-[90%] -translate-x-1/2 -translate-y-1/2 
                        bg-white rounded-2xl p-6 shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{type: "spring", stiffness: 500}}
            >
                
                <div className="grid grid-cols-10">
                    <h3 className="text-2xl col-span-9 text-center font-mono ">{title}</h3>
                    <div className="flex  justify-end ">
                        <button
                            onClick={()=>closeModal()}
                            className="flex justify-center items-center   w-7 h-7 bg-green-500 text-white  rounded-full hover:bg-green-600" 
                            >X</button>
                    </div>
                </div>
                
                {children}
            </motion.div>
        </motion.dialog>,
        document.getElementById("modal")
    );
}