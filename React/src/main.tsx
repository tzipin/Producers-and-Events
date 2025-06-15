import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import { ProducerProvider } from './contexts/producer.context.tsx'
import { UsersProvider } from './contexts/users.context.tsx'
import { EventDetailForUsers } from './components/eventDetailForUsers.tsx'
import { ListOfEventsForUsers } from './components/listOfEventsForUsers.tsx'
import { MainMenu } from './components/mainMenu.tsx'
import { ProducerMenu } from './components/producerMenu.tsx'
import { ListOfEventsForProducer } from './components/listOfEventsForProducer.tsx'
import { AddProducer } from './components/addProducer.tsx'
import { ProducerDetails } from './components/producerDetails.tsx'
import { ExistProducer } from './components/existProducer.tsx'
import { EventDetailForProducer } from './components/eventDetailForProducer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path='/' element={<MainMenu/>}/>
            <Route path='/users' element={<ListOfEventsForUsers/>} />
              <Route path='/users/:id' element={<EventDetailForUsers/>} /> 
            {/* </Route> */}
          {/* </Route> */}
        </Routes>
        <Routes>
          <Route path='/producers' element={<ProducerMenu/>} />
          <Route path='/producers/newProducer' element={<AddProducer/>} />
          <Route path='/producers/existProducer' element={<ExistProducer/>} />
          {/* <Route path='/producers/existProducer/details' element={<ProducerDetails email={undefined}/>} /> */}
          <Route path='/producers/existProducer/:id' element={<EventDetailForProducer/>} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  </StrictMode>,
)
