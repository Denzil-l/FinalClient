import { useState, useEffect, useContext } from "react"
import ModelForm from "./ModelForm"
import Task from "./Task"
import './Tasks.css'
import axios from "axios";


export const TasksM = () => {
    const [bio, setBio] = useState([])
    const [psycho, setPsycho] = useState([])
    const [social, setSocial] = useState([])
    const [spiritual, setSpiritual] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://finalserver-lne5.onrender.com/content/tasks/${localStorage.getItem("userId")}`);

                const updatedBio = [];
                const updatedPsycho = [];
                const updatedSocial = [];
                const updatedSpiritual = [];
                setTasks(response.data)

                response.data.forEach((item) => {
                    switch (item.type) {
                        case 'Bio':
                            updatedBio.push(item);
                            break;
                        case 'Psycho':
                            updatedPsycho.push(item);
                            break;
                        case 'Social':
                            updatedSocial.push(item);
                            break;
                        case 'Spiritual':
                            updatedSpiritual.push(item);
                            break;
                        default:
                            break;
                    }
                });

                setBio(updatedBio);
                setPsycho(updatedPsycho);
                setSocial(updatedSocial);
                setSpiritual(updatedSpiritual);


            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const updatedBio = [];
        const updatedPsycho = [];
        const updatedSocial = [];
        const updatedSpiritual = [];
        tasks.forEach((item) => {
            switch (item.type) {
                case 'Bio':
                    updatedBio.push(item);
                    break;
                case 'Psycho':
                    updatedPsycho.push(item);
                    break;
                case 'Social':
                    updatedSocial.push(item);
                    break;
                case 'Spiritual':
                    updatedSpiritual.push(item);
                    break;
                default:
                    break;
            }
        });


        setBio(updatedBio);
        setPsycho(updatedPsycho);
        setSocial(updatedSocial);
        setSpiritual(updatedSpiritual);

    }, [tasks])
    return (
        <>
            <ModelForm set={setTasks} />
            <div className="list">
                {bio.map(task => (
                    <Task key={`${task.name}${task.id}`} set={setTasks} id={task.id} type={task.type} name={task.name} text={task.text} />
                ))}
            </div>
            <div className="list">
                {psycho.map(task => (
                    <Task key={`${task.name}${task.id}`} set={setTasks} id={task.id} type={task.type} name={task.name} text={task.text} />
                ))}
            </div>
            <div className="list">
                {social.map(task => (
                    <Task key={`${task.name}${task.id}`} set={setTasks} id={task.id} type={task.type} name={task.name} text={task.text} />
                ))}
            </div>
            <div className="list">
                {spiritual.map(task => (
                    <Task key={`${task.name}${task.id}`} set={setTasks} id={task.id} type={task.type} name={task.name} text={task.text} />
                ))}
            </div>
        </>
    )
}