import React, {useState} from 'react'
import UserContext from './UserContext'
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import './index.css';
import SignIn from "./components/beforelogin/SignIn";
import Landingpage from "./components/beforelogin/Landingpage"
import SignUp from "./components/beforelogin/SignUp";
import AboutPage from "./components/beforelogin/AboutPage";
import Dashboard from "./components/afterlogin/Dashboard";
import DemoApp from "./components/calendar/DemoApp"
import TodoApp from "./components/todo-component/TodoApp"
import Calculator from "./components/calculator/Calculator"
import Quote from "./components/afterlogin/Quote"
import PomodoroApp from './components/pomodoro-component/src/PomodoroApp';
import NoteApp from './components/notes/Notes'
import WhiteBoard from './components/whiteboard-component/src/WhiteboardApp'
import Logout from './components/beforelogin/Logout'
function App() {


  let users = JSON.parse(localStorage.getItem("user"))
  let authentication = false

  if(users){
    authentication = true
  }

const [user, setUser] = useState({
  isAuthen: authentication
})


  return (
    <UserContext.Provider value={{user, setUser}}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route path="/api/auth" element={<SignIn />} />
        <Route path="/api/register" element={<SignUp />} />
        <Route path="/api/logout" element={<Logout/>} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/dashboard" element={<Dashboard component={<Quote/>}/>} />
        <Route path="/calendar" element={<Dashboard component={<DemoApp />}/>} />
        <Route path="/todo" element={<Dashboard component={<TodoApp />}/>} />
        <Route path="/calculator" element={<Dashboard component={<Calculator />}/>} />
        <Route path="/pomodoro" element={<Dashboard component={<PomodoroApp />}/>} />
        <Route path="/notes" element={<Dashboard component={<NoteApp />}/>} />
        <Route path="/whiteboard" element={<Dashboard component={<WhiteBoard />}/>} />
   </Routes>
 </Router>
  </UserContext.Provider>
  );
}

export default App;

