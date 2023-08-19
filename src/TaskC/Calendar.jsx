import React, { useEffect, useState } from 'react';
import { Cells } from './Cells';
import './Calendar.css'

const Calendar = ({ list, extendedList, setExtendedList }) => {

    const [day, setDay] = useState((new Date()).getDate())
    const [amountDays, setAmountDays] = useState(0)


    const calendarStyles = {
        display: 'grid',
        gridTemplateColumns: `minmax(150px, auto) repeat(${amountDays}, minmax(30px, 1fr))`, // 
        gridTemplateRows: `repeat(${list.length + 1}, minmax(30px, 1fr))`,
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        overflowY: 'auto',

    };


    useEffect(() => {
        const currentDate = new Date();
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const numberOfDaysInMonth = lastDayOfMonth.getDate();
        setAmountDays(numberOfDaysInMonth)
    }, [])


    return (

        <div className='grid' style={calendarStyles}>
            <Cells setExtendedList={setExtendedList} days={amountDays} list={list} today={day} extendedList={extendedList} />
        </div>
    );
};

export default Calendar;
