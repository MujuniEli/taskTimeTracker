
import { Routes, Route } from 'react-router-dom'

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
                    <Route path='/admin' element={ <Admin /> } />
                    <Route path='/signIn' element={ <SignIn /> } />
                    <Route path='/signUp' element={ <SignUp /> } />
                </Routes>
            </div>
  )
}

export default App
