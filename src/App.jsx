
import { Routes, Route } from 'react-router-dom'

import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Nav from './components/Nav'
import TrackingCodeSelector from './components/TaskCodeSelector'
import Counter from './components/Counter'
import History from './components/History'
import './App.css'

function App() {
  

  return (
            <div className="app">
                <Nav />
                <Routes>
                    <Route path='' element={<Admin/>} />
                    <Route path='' element={<SignIn />} />
                    <Route path='' element={<SignUp />} />
                </Routes>
                <TrackingCodeSelector />
                <Counter />
                <History />
                
            </div>
  )
}

export default App
