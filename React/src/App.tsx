import { useState } from 'react'
import './App.css'
import { MainMenu } from './components/mainMenu'
import { ListOfEventsForUsers } from './components/listOfEventsForUsers'
import { ListOfEventsForProducer } from './components/listOfEventsForProducer'

function App() {

  return (
    <>
      {/* <MainMenu/> */}
      <ListOfEventsForUsers/>
      <ListOfEventsForProducer/>
    </>
  )
}

export default App
