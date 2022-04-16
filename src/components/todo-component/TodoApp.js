import React from 'react'
import styled from 'styled-components';
import TodoList from './components/TodoList';

// In this project we are going to do a Todo List with react and style components

function App() {
  // we set a  state sideBarToogle and setSideBarToogle to update the state to interact with 
  // the sidebar to know if its open or close color: '#ab6ddf', color: '#70c4be', color: '#fd76a1',
  const todoList = [{
    name: 'Personal',
    color: 'hsl(200, 91%, 51%)',
    icon: 'fas fa-user'
   },
   {
    name: 'Work',
    color: ' hsl(0, 91%, 51%)',
    icon: 'fas fa-briefcase'
   },{
    name: 'Study',
    color: 'hsl(284, 91%, 51%)',
    icon: 'fas fa-file-code'
   },
   
  ]
  return (
    <Wrapper>
      <Main>
        <MainContent >
          <TodoContent>
            <Tittle>To Do🗒️</Tittle>
            <Greeting>Lets get to work! 🚀📖</Greeting>
          {todoList.map(category => (
            <TodoList 
               key={category.name}
               name={category.name}
               color={category.color}
               icon={category.icon} />
          ))}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
 min-height: 75vh;

 
`
const Main = styled.div`
 display: flex;

`
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
  width: 80vw;
`

const TodoContent = styled.div`
  max-width: 600px;
  width: 100%;
`

const Tittle = styled.div`
  margin: 8px 0;
  font-size: 30px;
  font-weight: 700;

`

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1px;
`