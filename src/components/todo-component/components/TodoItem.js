import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {db} from '../firebase'
import {doc, updateDoc, deleteDoc} from 'firebase/firestore'
const TodoItem = ({todo, color, name}) => {

    const [editedTodo, setEditedTodo] = useState(todo.title)

    useEffect(() => {
        setEditedTodo(todo.title)
    }, [todo])

    const docRef = doc(db, 'todoCategory', name, 'todos', todo.id)

    const deleteButtonHandler =  async () => {
        await deleteDoc(docRef)
    }

    const saveTodo = async () => {
     
       await updateDoc(docRef,{
           title: editedTodo,
       })
    }
    const completeTodo =  async () => {
       await  updateDoc(docRef,{
            completed: !todo.completed
        })
    }

    return (
        <TodoListItem>
        <Checkbox  className={todo.completed ? 'fas fa-check-circle' : 'far fa-circle'} onClick={completeTodo}  style={{color: color}}/>
        <input 
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            value={editedTodo} 
            onChange={e => setEditedTodo(e.target.value)} />
        {todo.title !== editedTodo && (<SaveTodo className='fas fa-check' onClick={saveTodo} />)}
        <DeleteTodo className='fas fa-trash-alt' onClick={deleteButtonHandler}/>
        </TodoListItem>    
    )
}

export default TodoItem

const TodoListItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    transition: 0.3s;

    input{
        flex:1;
        font-size: 20px;
        outline: none;
        background: none;
        border: none;
        color: #eee;
        padding: 10px;
    }
`

const Checkbox = styled.div`
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`

const DeleteTodo = styled.div`
    color: #ff1605;
    padding: 10px 16px;
    margin-left: 14px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover{
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`
const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;

  &:hover{
      background-color: #2b6127;
      transition: 0.3s;
      cursor: pointer;
  }
`