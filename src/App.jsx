
import { Routes, Route } from 'react-router-dom'

import Tracker from './pages/Tracker'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Nav from './components/Nav'
import './App.css'

function App() {
  

  return (
            <div className="app">
                <Nav />
                <Routes>
                    <Route path='/' element={ <Tracker /> } />
                    <Route path='/admin' element={ <Admin /> } />
                    <Route path='/signin' element={ <SignIn /> } />
                    <Route path='/signup' element={ <SignUp /> } />
                </Routes>
            </div>
  )
}

export default App
