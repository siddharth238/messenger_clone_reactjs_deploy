import React,{forwardRef} from 'react';
import './Message.scss'
import { Card ,CardContent, Typography} from '@mui/material';

const Message = forwardRef( ({message,username},ref) => {
    const flag= username===message.username;
  return (
     
      <div className={`message ${flag && 'message__user'}`}>
         <Card ref={ref} id="card"className={flag ?"usercard" :"guestcard"} >
      <CardContent>
        <Typography  variant="p" style={{  wordWrap: "breakWord"}} >
       {!flag && `${message.username || "Anonymous "} : `} {message.message}
        </Typography>
      </CardContent>
      
    </Card>
        
    </div> 
  )
})

export default Message