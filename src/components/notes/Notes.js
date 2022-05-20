import React, {useState, useEffect } from "react";
//import { v4 as uuidv4 } from "uuid";
import {db} from '../todo-component/firebase'
import { collection, orderBy , onSnapshot, query, addDoc, serverTimestamp } from 'firebase/firestore'
import Grid from '@mui/material/Grid';
import styled from 'styled-components'
import Note from './Note'

export default function NoteApp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const [action, setAction] = useState(false);

  // template literal
  useEffect(() => {
      const todoListQuery = query(
          collection(db, 'notes'), 
          orderBy("createdAt", 'desc')
      )

      const unsub = onSnapshot(
          todoListQuery, querySnapshot => {
              const noteItems = []

              querySnapshot.forEach(doc => {
                  noteItems.push({
                      ...doc.data(),
                      id: doc.id,
                  })
              })

              setNotes(noteItems)
          }
      )
      return unsub
      
  },[])

  const add =  async (event) => {
      event.preventDefault()
      setAction(false)
    const  collectionRef =  collection(db, 'notes') 
    
    await addDoc(collectionRef, {
        title: title, 
        description: description,
        createdAt: serverTimestamp()
    })

    setDescription('')
    setTitle('')

  }

  // const filteredNotes = useMemo(() => {
  //   if (!keyword) {
  //     return notes;
  //   }
  //   return notes.filter(({ title, description }) => {
  //     return title.includes(keyword) || description.includes(keyword);
  //   });
  // }, [keyword, notes]);

  return (
    <NoteContainer>
      <div style={{display:'flex', alignItems: 'flex-start', width: '100%'}}>
        <NoteTitle>Notes 📝</NoteTitle>
        </div>{ (action === true)? ( <AddNote >
          <AddTitle>
          <h2>Add Note</h2>
          <Labels>Title</Labels>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </AddTitle>
        <AddDesc>
          <Labels>Description</Labels>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </AddDesc>
        <ButtonCtn>
          <button type="submit" onClick={add}>ADD</button>
          <button onClick={() => setAction(false)}>X</button>
        </ButtonCtn>
          </AddNote>) : ( <AddNotebtn onClick={() => setAction(true)} >
            Add a new note
          </AddNotebtn>)}
        <Grid container sx={{ width: '100%', maxWidth:'100vw', marginTop: '20px'}
   }>
          {notes.map((note, index) => {
            return (
              <ul key={note.id}>
                <Grid item xs >
                <Note note={note} />
                </Grid>
  
              </ul>
            );
          })}
        </Grid>
    </NoteContainer>
  );
}


const NoteContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

const NoteTitle = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  
  font-weight: 700;
  color: '#1a252f';`

const AddNote = styled.form`
display: flex;
flex-direction: column;
padding-left: 40px;
padding-bottom: 10px;
width: 60%;
margin-bottom: 10px;
border: 1px solid black;
box-shadow: 0 0 5px black;
border-radius: 10px;
@media (max-width: 768px) {
     width: 100%;

    }

 `

const AddNotebtn = styled.form`
display: flex;
justify-content: center;
text-align: center;
padding: 20px 0;
font-size: 20px;
font-weight: 700;
width: 20%;
border-radius: 10px;
border: 1px solid black;
box-shadow: 0 0 5px black;
@media (max-width: 768px) {
        width: 100%;

    }

&:hover{

  opacity: 0.9;
  cursor: pointer;
 }
`

const AddTitle = styled.div`
 input{
    height: 20px;
    padding: 15px;
    width: 90%;
    border-radius: 5px;
    font-size: 16px}

`


const ButtonCtn = styled.div`
display: flex; 
justify-content: flex-end;

button{
  width: 60px;
  padding: 6px;
  border-radius: 10px;
  font-size: 15px;
  height: 35px;
  margin-right: 10px;


  &:hover{
  opacity: 0.7;
  font-size: 16px;
  cursor: pointer;
}

}

`
const Labels = styled.div`
 font-size: 16px;
 font-weight: 500;
 margin-bottom: 2px;
 `
const AddDesc = styled.div`

  input{
    height: 30px;
    padding: 15px;
    width: 90%;
    border-radius: 5px;
    font-size: 16px
  }

  margin-bottom: 20px;
`

