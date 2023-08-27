
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
            <div className="app">
                
                <main className='tracker'>
                    <Outlet />
                </main>
            </div>
  )
}

export default App
