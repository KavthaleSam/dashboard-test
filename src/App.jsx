import { useState } from 'react'
import './App.css'
import './hmm.css'
import Header from './header'
import SideBar from './sidebar'
import BodyCard from './bodycard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <div class="main_item-container main_right main_body">
          <BodyCard />
          <BodyCard />
        </div>
      </main>
    </div>
  )
}

export default App
