

import { useEffect, useState } from 'react'
import { TimerContainer } from './TimeContainer/TimeContainer';

const Countdown = () => {

    const [time, setTime] = useState(7);
    const [newTime, setNewTime] = useState(0)
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [message, setMessage] = useState("");

    const timeToDays = time * 60 * 60 * 24 * 1000;

    let countDownDate = new Date().getTime() + timeToDays;


    useEffect(() => {


        var updateTime = setInterval(() => {
            var now = new Date().getTime();

            var difference = countDownDate - now;

            var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
            var newHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var newMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(newDays);
            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);


            if (difference <= 0) {
                clearInterval(updateTime);
                setMessage("The Launch Has Started");
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        })

        return () => {
            clearInterval(updateTime);
        }

    }, [time]);

    const handleClick = () => {

        setTime(newTime);
        console.log(time);
        setNewTime(0);
    };

    const handleChange = (e) => {
        let inputTime = e.target.value;
        setNewTime(inputTime);

    };

    return (
        <div>
            <TimerContainer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        </div>
    )
}

export default Countdown;