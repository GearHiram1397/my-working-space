import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'
import {db} from '../firebase'
import { collection, orderBy , onSnapshot, query, addDoc, serverTimestamp } from 'firebase/firestore'
const TodoList = ({name,color,icon}) => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    // template literal
    
    useEffect(() => {
        const todoListQuery = query(
            collection(db, 'todoCategory', name, 'todos'), 
            orderBy("createdAt", 'desc')
        )

        const unsub = onSnapshot( todoListQuery, querySnapshot => {
                const todoItems = []

                querySnapshot.forEach(doc => {
                    todoItems.push({
                        ...doc.data(),
                        id: doc.id,

                    })
                })

                setTodos(todoItems)
               
            }
        )
       return unsub
    }, [])

    const addButtonHandler =  async (e) => {
        e.preventDefault()
      const  collectionRef =  collection(db, 'todoCategory', name, 'todos') 
      
      await addDoc(collectionRef, {
          title: todo, 
          completed: false,
          createdAt: serverTimestamp()
      })

      setTodo('')
    }
    return (
        <Wrapper>
            <TodoCategoryHeader >
                <CategoryIcon style={{backgroundColor: color }}>
                    <i className={icon} />
                </CategoryIcon>
                    <Title>{name}</Title>
                    <TodoInput value={todo} onChange={e => setTodo(e.target.value)} />
                    <AddTodo className='fas fa-plus' onClick={(e) => addButtonHandler(e)}  />
            </TodoCategoryHeader>
           {todos.map((todo, index) => (<TodoItem
            key={index}
            todo={todo}
            color={color} 
            name={name}
            />))} 
        </Wrapper>
    )
}

export default TodoList

const Wrapper = styled.div`
 background-color: #1a252f;
 margin-bottom: 30px;
 border-radius: 20px;
 overflow: hidden;
`

const TodoCategoryHeader = styled.div`
 background-color: #1a252f;
 color: #eee;
 height: 50px;
 display: flex;
 align-items: center;
 padding: 15px 20px;

`

const CategoryIcon = styled.div`
  height: 30px ;
  width: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding-left: 10px;
`
const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
`

const TodoInput = styled.input`
    height: 30px;
    font-size: 18px;
    width: 60%;
    outline: none;
    border: none;
    background-color: #eee;
    border-radius: 4px;
    color: #2c3e50;
    padding: 4px 10px;
    margin-right: 10px;
`

const AddTodo = styled.i`
 

 &:hover{
     background-color: #20212d;
     transition: 0.3s;
     cursor: pointer;
 }

`