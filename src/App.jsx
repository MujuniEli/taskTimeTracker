
import Nav from './components/Nav'
import './App.css'
import TrackingCodeSelector from './components/TaskCodeSelector'
import StartStopBtns from './components/StartStopBtns'
import Counter from './components/Counter'

function App() {
  

  return (
            <div className="app">
                <Nav />
                <StartStopBtns />
                <TrackingCodeSelector />
                <Counter />
                
            </div>
  )
}

export default App
