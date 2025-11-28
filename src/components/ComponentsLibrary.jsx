import React, { useContext, useState } from 'react'
import Modal from './Modal'
import ListItem from './UI/ListItem'
import { ModalContext } from '../../context/ModalContext'

import Library from './Library'

export default function ComponentsLibrary() {
    const [modalContent, setModalContent] = useState("")
    const {openModal, closeModal, showModal} = useContext(ModalContext)

    function handleOpenModal(){
        console.log("hola")
        openModal()
    }

  return (
    <div className='text-white w-full'>
        <ul className='flex flex-col justify-end items-end '>
            <ListItem title="Buttons" onClick={handleOpenModal}/>
            <ListItem title="Input"/>

        </ul>
        
         <Modal title="components">
         <Library />

        </Modal>
    </div>
  )
}
