import React, { useState } from 'react'
import './writtingText.css'
import { useGlobalContext } from '../GlobalContext.jsx/GlobalContext'

const WrittingText = () => {

const { handleChangeContentValue, messageInput, handleSubmit } = useGlobalContext()

  return (

    <div className='writtingText'>
      <form className='form' onSubmit={handleSubmit}>

        <div className='textArea'>
        <label htmlFor="text_input"></label>
        <i className="bi bi-emoji-smile smileFace"></i>
        <input className='textInput' placeholder='Mensaje' type="text" name='text' id='content' onChange={handleChangeContentValue} value={messageInput.text} />
        <i className="bi bi-paperclip"></i>
        <i className="bi bi-camera"></i>
        </div>

        <button className='btn-submit' type="submit"><i className="bi bi-send-fill"></i></button>
      </form>
    </div>

  )
}

export default WrittingText
