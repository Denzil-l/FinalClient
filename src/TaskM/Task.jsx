import React, { useState } from 'react';
import axios from 'axios';
import './Tasks.css'
const Task = ({ id, type, name, text, set }) => {
    const [showText, setShowText] = useState(false);

    const handleMouseEnter = () => {
        setShowText(true);
    };

    const handleMouseLeave = () => {
        setShowText(false);
    };
    const handleComplete = async () => {
        try {
            const response = await axios.delete(`https://finalserver-lne5.onrender.com/content/tasks/remove/${localStorage.getItem("userId")}/${id}`);
            set(response.data.tasks)
        } catch (error) {
            console.log(error)
        }




    }
    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`task ${type}`}
            key={`${type}${id}`}
        >
            <div className="Litop">
                <div>{name}</div>
                <div className="Libuttons">
                    <div className='completed' onClick={handleComplete}>Completed</div>
                </div>
            </div>
            {showText && <div>{text}</div>}

        </li>
    );
};

export default Task;