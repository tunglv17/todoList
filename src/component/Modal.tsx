import React, { useState } from 'react'
const Modal = ({ onAdd, closeModal }: any) => {
   

   const [inputValue, setInputValue] = useState("");
   const [inputContent, setInputContent] = useState("")
   const onHandleSubmit = (e: any) => {
      e.preventDefault();
      onAdd({title: inputValue, content:inputContent, complete: false})
      setInputValue("");
      setInputContent("");
   }
   const onHandleChange = (e: any) => {
      setInputValue(e.target.value)
   }
   const onHandleChangeContent = (e: any) => {
      setInputContent(e.target.value)
   }
   return (
      <div className="grid modal">
         <div className="modal__overlay" />
         <div className="modal__body">
            <div className="modal__inner">
               <div className="modal-form">
                  <form action="" onSubmit={(e) => onHandleSubmit(e)}>
                     <div className="modal-form__group">
                        <label htmlFor="todo">Công việc:</label>
                        <input required id="todo" type="text" className="modal-form__input" placeholder="nhập" onChange={(e) => onHandleChange(e)}/>
                        <label htmlFor="content">Nội dung</label>
                        <input required id="content" type="text" className="modal-form__input" placeholder="nhập" onChange={(e) => onHandleChangeContent(e)}/>
                     </div>
                     <div className="modal-form__controls">
                        <button className="btn btn-close" onClick={() => closeModal(false)}>Đóng</button>
                        <button className="btn btn-add" type="submit" >Thêm</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal

