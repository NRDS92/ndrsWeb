import React, { useContext, useState } from 'react'
import Modal from './Modal'
import ListItem from './UI/ListItem'
import { ModalContext } from '../../context/ModalContext'

import Library from './Library'

export default function ComponentsLibrary() {
    const [modalContent, setModalContent] = useState("")
    const {openModal, closeModal, showModal} = useContext(ModalContext)

    function handleOpenModal(name){
        openModal()
        setModalContent(name)

    }

  return (
    <div className='text-white w-full'>
        <ul className='flex flex-col justify-end items-end '>
            <ListItem title="Buttons" onClick={()=>handleOpenModal("buttons")}/>
            <ListItem title="Inputs" onClick={()=>handleOpenModal("inputs")}/>
             <ListItem title="Text Animations" onClick={()=>handleOpenModal("text-anims")}/>
              <ListItem title="Loaders" onClick={()=>handleOpenModal("loaders")}/>
            

        </ul>
        
         <Modal title="components">
         <Library content={modalContent} setContent={setModalContent}  />

        </Modal>
    </div>
  )
}
