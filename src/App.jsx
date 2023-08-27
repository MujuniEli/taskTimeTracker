
import { Outlet } from 'react-router-dom'

import Nav from './components/Nav'
import './App.css'

function App() {
  

  return (
            <div className="app">
                <Nav />
                <main className='tracker'>
                    <Outlet />
                </main>
            </div>
  )
}

export default App
