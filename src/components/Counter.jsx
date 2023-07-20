import { useState, useEffect } from "react";


export default function Counter() {
    //define variables for days, hours, minutes and seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    //define variable for the timer status (ie running or stopped)
    const [isRunning, setIsRunning] = useState(true);

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
}