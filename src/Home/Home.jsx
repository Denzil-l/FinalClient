
import Calendar from '../Calendar/Calendar'
import Verify from '../Auth/Verify'
import './Home.css'
import { Link } from 'react-router-dom';
import { Models } from '../Models/Models';
import { AuthContext } from "../AuthContext";
import { useContext } from 'react';


export const Home = () => {
    const { userId } = useContext(AuthContext)


    console.log(userId)
    return (
        <>
            <Verify check={false}>
                <h2 className='title'>Welcome to the Extended Task Master</h2>
                <p className='welcometitle text'>This application invites you to structure your life based on the popular psychological model "BPSS" or The BioPsychoSocial-Spiritual model. This will allow you to bring order and discipline to your life.</p>
                <Models />
                <p className='welcometitle text'>You also have access to an interactive calendar that allows you to create a daily plan for each day and keep convenient statistics.</p>
                <section className='calendar'>
                    <Calendar listtasks={[
                        'Exercise',
                        'Cleaning',
                        'Study',
                        'Work',
                        'Errands',
                        'Relaxation',
                        'Hobbies',
                        'Social',
                        'Chores',
                        'Learning'
                    ]} />
                </section>
                <Link className='buttonClass' to='/login' > Get Started </Link>
            </Verify>
            <Verify check={true}>
                <p className='text'>Here you can learn more about the concept of BPSS.
                    This idea is to divide your life into 3 (or 4) main areas in life and group your short-term and long-term goals. It helps bring your mind into structure and order.</p>
                <Models />
                <Link className='buttonClass' to='/createTaskM' > Create your tasks </Link>
                <p className='text'>The second option is to maintain daily statistics on the execution of daily tasks. This makes it possible to visually see where you are succeeding and where you need to put more effort.</p>
                <section className='calendar'>
                    <Calendar listtasks={[
                        'Morning work-out',
                        'Cleaning',
                        'Learning Hebrew',
                        'Work',
                        'Go to bed before 00:00',
                        'Relaxation',
                        'Hobbies',
                        'Meditation'
                    ]} />
                </section>
                <Link className='buttonClass' to='/createDailyTask' > Create your daily tasks </Link>

            </Verify >
        </>

    )
}

