import React, {useState} from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'


const App = () => {

  const [tasklist, setTasklist] = useState([])
  return (
    <div>
      <Header />
      <AddTask tasklist = {tasklist} setTasklist = {setTasklist} />
      <ShowTask tasklist = {tasklist} setTasklist = {setTasklist} />
    </div>
  )
}

export default App