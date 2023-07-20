import { useState, useEffect } from "react";


export default function Counter() {
    //define variables for days, hours, minutes and seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    //define variable for the timer status (ie running or stopped)
    const [isRunning, setIsRunning] = useState(true);
}