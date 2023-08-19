import { useEffect, useState } from "react"
import Calendar from './Calendar'
import DailyForm from "./DailyForm"
import './Daily.css'
import axios from "axios"
export const DailyTask = () => {
    const [list, setList] = useState([])
    const [extendedList, setExtendedList] = useState([])
    useEffect(() => {

        const getData = async () => {
            const response = await axios.get(`https://finalserver-lne5.onrender.com/content/daily/${localStorage.getItem('userId')}`)
            const data = response.data
            setExtendedList(data)
            const names = data.map(item => {
                return item.name
            })
            setList(names)
        }
        getData()
    }, [])
    return (
        <>
            <p className="text">Mark completed daily tasks in your calendar by clicking on the appropriate cell</p>
            <DailyForm list={list} setList={setList} extendedList={extendedList} setExtendedList={setExtendedList} />
            <section className="calendar">
                <Calendar list={list} extendedList={extendedList} setExtendedList={setExtendedList} />
            </section>
        </>
    )
}