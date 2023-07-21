
import Nav from './components/Nav'
import TrackingCodeSelector from './components/TaskCodeSelector'
import Counter from './components/Counter'
import History from './components/History'
import './App.css'

function App() {
  

  return (
            <div className="app">
                <Nav />
                <TrackingCodeSelector />
                <Counter />
                <History />
                
            </div>
  )
}

export default App
