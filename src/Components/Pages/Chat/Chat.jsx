import React from 'react'
import ListChat from '../../ListChat/ListChat'
import './chat.css'
import { useParams } from 'react-router-dom'
import { contactMessage } from '../../Helpers/contacts'
import User from '../../User/User'
import WrittingText from '../../WrittingText/WrittingText'

const Chat = () => {

const params = useParams()
const chat = contactMessage(params.contact_id)


  return (
    <div className='body'>
      <User userName={chat.nombre} userImg={chat.thumbnail} userConection={chat.ultima_conexion} />
      <ListChat dataMessage={chat.mensajes}/>
      <WrittingText />
    </div>
  )
}

export default Chat
