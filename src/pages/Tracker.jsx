
import TaskCodeSelector from '../components/TaskCodeSelector'
import Counter from '../components/Counter'
import History from '../components/History'

export default function Tracker () {

    return (
                <div className="tracker">
                    <TaskCodeSelector />
                    <Counter />
                    <History />
                </div>

    )
}