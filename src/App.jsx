import { useState } from 'react'
import Header from './components/Header/Header'
import DisplayRow from './components/DisplayRow/DisplayRow'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Banner/> 
   <DisplayRow/>
    < Footer/>
    </>
  )
}

export default App
