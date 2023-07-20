
import Nav from './components/Nav'
import './App.css'
import TrackingCodeSelector from './components/TaskCodeSelector'
import StartStopBtns from './components/StartStopBtns'

function App() {
  

  return (
            <div className="app">
                <Nav />
                <StartStopBtns />
                <TrackingCodeSelector />
                
            </div>
  )
}

export default App
