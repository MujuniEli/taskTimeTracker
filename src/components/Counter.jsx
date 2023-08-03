import { useState, useEffect } from "react";


export default function Counter() {
    //define variables for days, hours, minutes and seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    //define variable for the timer status (ie running or stopped)
    const [isRunning, setIsRunning] = useState(false);

    //function to format numbers with leading zeros if needed
    const formatNumber = (num) => (num < 0 ? `0${num}` : num);

    //function to increment the counter by one second
    const incrementCounter = () => {
        setSeconds((prevSeconds) => {
            if (prevSeconds === 59) {
                //if seconds reach 59, reset to zero and increment minutes
                setMinutes((prevMinutes) => {
                    if (prevMinutes === 59) {
                        //if minutes reach 59, reset to zero and increment hours
                        setHours((prevHours) => {
                            if (prevHours === 23) {
                                //if hours reach 23, reset to zero and increment days
                                setDays((prevDays) => prevDays + 1);
                                return 0;
                            }else {
                                return prevHours + 1;
                            }
                        });
                        return 0;
                    }else {
                        return prevMinutes + 1;
                    }
                });
                return 0;
            } else {
                return prevSeconds + 1;
            }
        });
        
    };

    // deploying useEffect to start or stop the timer based on status
    useEffect(() => {
        let timer;
        if (isRunning) {
            // if the timer is running, set an interval to call the increment function every second
            timer = setInterval(incrementCounter, 1000);
        }else {
            //if the timer is stopped, clear the interval
            clearInterval(timer)
        }
        //clean up function to clear the interval when the component unmounts
        return () => clearInterval(timer);

    }, [isRunning]); //useEffect dependency array to run the effect only when the status changes

    //function to handle the click event on the button
    const handleClick = () => {
        //Toggle the timer status
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    return (
        <div className="counter-section">
            <h3>Counter</h3>
            <div className="counter">
            <p>
                <div className="days">
                Days {formatNumber(days)}  {" "}
                </div>

                <div className="hours">
                Hours {formatNumber(hours)} 
                </div>
                
                <div className="minutes">
                 Minutes   {formatNumber(minutes)} {" "}
                </div>
                
                <div className="seconds">
                 Seconds   {formatNumber(seconds)} 
                </div>
                
            </p>
            <button onClick={handleClick}>
                {isRunning ? "Stop" : "Start"} the counter
            </button>
            </div>
        </div>
    );
}