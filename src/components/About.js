import { useState, useEffect } from "react";

const About = () => {
    const [timer, setTimer] = useState(0);
    const [showTimer, setShowTimer] = useState(false)
    useEffect(() => {
        const time = setTimeout(() => {
            setTimer(prev => prev + 1)
        }, 1000);
        return () => {
            clearTimeout(time)
        }
    })
    const onClick = () => {
        setShowTimer(!showTimer)
    }

    return (
        <div className="about">
            <h4> Free up your mental space</h4>
            <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list.</p>
            <h5>Want to Know About The Time Spent Here ? <span onClick={onClick}>click here</span></h5>

            {showTimer && <h3>Thank You...! You are here for {timer} seconds</h3>}
            {/* <button>reset</button>
            <button>pause</button> */}
        </div>
    )
}
export default About; 