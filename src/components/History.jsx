import { useEffect, useState } from "react"

async function fetchTaskInfo(taskCode, userName, userId, startDate, endDate) {
    const response = await fetch(
        `/api/tasks/${taskCode}/${userName}/${userId}/${startDate}/${endDate}`
        );
        const taskInfo = await response.json();
        return taskInfo;
} 

export default function History () {
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
                </div>
    )
}