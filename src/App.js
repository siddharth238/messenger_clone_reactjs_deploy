 import React from 'react';
import './App.css'; 
import FlipMove from 'react-flip-move'
import { FormControl  ,Input} from '@mui/material';
import { Button } from '@material-ui/core';
 import Message from './Message';
import {db} from './firebase';
import firebase from 'firebase/compat/app'; 
import Navbar from './navbar';
function App() {

const[input, SetInput]= React.useState('')
const [message,SetMessages]=React.useState([ ])
 const[username, setUsername]=React.useState('')

 React.useEffect(()=>{
  db.collection('messages').orderBy('timestamp', 'desc').onSnapshot( snapshot=>{
     SetMessages(snapshot.docs.map(doc=>({message:doc.data(), id:doc.id})))
  })
 },[])


React.useEffect(() => {
 setUsername(prompt("Hey your name?"))
}, [])

 function toggle(event){
   event.preventDefault()
   db.collection('messages').add({
     message:input,
     username:username,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
      
   })
   SetMessages([...message,{message:input, username:username}])
   SetInput('')
 }

  return (
    <div className="App">
      <Navbar/>
       <h1>Hello {username} !</h1>
       <form className='form-main' >
      <FormControl>
   
  <Input placeholder='Type your message' value={input} onChange={event=> {SetInput(event.target.value)}} />
  <Button   className='button'
          Type='submit'
          disabled={!input }
          variant={ "contained" }
          color="Secondary" 
          onClick={toggle} >Send Message </Button  >
 </FormControl> </form>
     <FlipMove className='messages'>

    
     {
          message.map(({message,id})=>(
                 <Message key={id } username={username} message={message} />
     
))}
     
     </FlipMove>
    </div>
  );
}

export default App;
