import TrackingCodeSelector from './components/TaskCodeSelector'
import Counter from './components/Counter'
import History from './components/History'

export default function Tracker () {

    return (
                <div className="tracker">
                    <TrackingCodeSelector />
                    <Counter />
                    <History />
                </div>

    )
}