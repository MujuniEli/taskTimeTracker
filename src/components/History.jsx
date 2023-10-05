import { useQuery } from "react"

async function fetchTaskInfo(taskCode, userName, userId, startDate, endDate) {
    const response = await fetch(
        `/api/tasks/${taskCode}/${userName}/${userId}/${startDate}/${endDate}`
        );
        const taskInfo = await response.json();
        return taskInfo;
} 

export default function History ({ taskCode, userName, userId, startDate, endDate }) {
    const { data: taskInfo, isLoading, error } = useQuery(
            ["task-info", taskCode, userName, userId, startDate, endDate],
            () => fetchTaskInfo(taskCode, userName, userId, startDate, endDate)
    );

    if (isLoading) {
        return <div>Loading task info...</div>
    }

    if(error) {
        return <div>Error fetching task info: {error.message}</div>
    }

    return (
                <div>
                    <div className="filter">
                        <h3>Filter here to see your tracking history</h3>
                        <div className="filter-inputs">
                        <form action="" className="form">
                            <div className="label-name">
                            <p> START DATE: </p>
                            <input type="date" />
                            </div>
                            <br />
                            <div className="label-name">
                            <p>END DATE:</p>
                            <input type="date" />
                            </div>
                        </form>

                        <button> SEARCH </button>
                        </div>
                    </div>

                    <div>
                        <h1>Task Information</h1>
                        <table>
                            <thead>
                            <tr>
                                <th>Task Code</th>
                                <th>User Name</th>
                                <th>User ID</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{taskInfo.taskCode}</td>
                                <td>{taskInfo.userName}</td>
                                <td>{taskInfo.userId}</td>
                                <td>{taskInfo.startDate}</td>
                                <td>{taskInfo.endDate}</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
    )
}