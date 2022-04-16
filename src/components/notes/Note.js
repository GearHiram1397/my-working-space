import * as React from 'react';
import  { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {db} from '../todo-component/firebase'
import {doc, updateDoc, deleteDoc} from 'firebase/firestore'
import styled from 'styled-components'

export default function Note({note}) {
  
  const [editedNoteTit, setEditedNoteTit] = useState(note.title)
  const [editedNoteDesc, setEditedNoteDesc] = useState(note.description)
    useEffect(() => {
        setEditedNoteTit(note.title)
        setEditedNoteDesc(note.description)
    }, [note])

    const docRef = doc(db, 'notes', note.id)

    const deleteButtonHandler =  async () => {
        await deleteDoc(docRef)
    }

    const saveNote = async () => {
     
       await updateDoc(docRef,{
           title: editedNoteTit,
           description: editedNoteDesc
       })
    }


    return (
      <Box sx={{ 
            width: '100%', 
            padding: '20px', 
            maxWidth: '360px', 
            bgcolor: '#1a252f', 
            color: "#eee", 
            borderRadius: "10px", 
            boxShadow: "0 0 3px black", 
            height: '13rem'
      }}>
        <Box sx={{ m: 1, my: 1,}}>
          <Noteinput style={{color: "#eee"}}
            type="text"
            value={editedNoteTit} 
            onChange={e => setEditedNoteTit(e.target.value)} />
            
        </Box>
        <Divider variant="middle" />
        <Box sx={{ my: 1, mx: 1 }}>
               <Noteinputdesc style={{color: "#eee"}}
                  type="text"
                  value={editedNoteDesc} 
                  onChange={e => setEditedNoteDesc(e.target.value)} />   
        
        </Box>
        <ButtonDivider>
          { (note.title !== editedNoteTit || note.description !== editedNoteDesc) && (<SaveNote className='fas fa-check' onClick={saveNote} />)}
        <DeleteNote className='fas fa-trash-alt' onClick={() => deleteButtonHandler()}/>
        </ButtonDivider>
      </Box>
    );
  }
  
  const ButtonDivider = styled.div`
    display: flex;
    justify-content: flex-end;
    `

  const DeleteNote = styled.div`
    color: #ff1605;
    padding: 20px 16px;
    margin-left: 4px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover{
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`


const SaveNote = styled.i`
  padding: 20px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;

  &:hover{
      background-color: #2b6127;
      transition: 0.3s;
      cursor: pointer;
  }
`

const Noteinput = styled.input`
  color: "#eee";
  width: 100%;
  text-decoration: none;
  background: none;
  font-size: 18px;
  font-weight: 800;
  padding: 10px 10px 10px 5px;
  border: none;
  border-radius: 0;
  letter-spacing: 1px;
`

const Noteinputdesc = styled.input`
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: none;
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  border: none;
  border-radius: 0;
 
`