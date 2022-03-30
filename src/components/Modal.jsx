import React from 'react'

function Modal({showModal, setShowModal}) {
  return (
    <>
    {showModal ? <div>Modal</div> : null}
    </>
  )
}

export default Modal