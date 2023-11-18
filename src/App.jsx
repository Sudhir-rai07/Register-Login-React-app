import { useState } from 'react'
import Login from './Component/Login'
import Register from './Component/Register'
import './App.css'

function App() {
const [currentForm, setCurrentForm] = useState('login')

const toggleForm = (formName) =>{
  setCurrentForm(formName)
}

  return (
    <>
{
  currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
}
    </>
  )
}

export default App
