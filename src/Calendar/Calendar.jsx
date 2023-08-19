import React, { useEffect, useState } from 'react';
import { Cells } from './Cells';
import './Calendar.css'
const Calendar = ({ listtasks }) => {
    const [tasks, setTasks] = useState([])
    const [month, setMonth] = useState((new Date()).getMonth())
    const [day, setDay] = useState((new Date()).getDate())
    const [amountDays, setAmountDays] = useState(0)

    const calendarStyles = {
        display: 'grid',
        gridTemplateColumns: `auto repeat(${amountDays}, minmax(30px, 1fr))`, // 
        gridTemplateRows: `repeat(${tasks.length + 1}, minmax(30px, 1fr))`,
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        overflowY: 'auto',
    };


    useEffect(() => {
        const currentDate = new Date();
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const numberOfDaysInMonth = lastDayOfMonth.getDate();

        setTasks(listtasks)
        setAmountDays(numberOfDaysInMonth)
    }, [listtasks])


    return (
        <div className='grid' style={calendarStyles}>
            <Cells days={amountDays} tasks={tasks} today={day} />
        </div>
    );
};

export default Calendar;
