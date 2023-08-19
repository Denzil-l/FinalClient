import './Models.css'
import { Link as Scroll } from 'react-scroll';
import { useState } from 'react'


export const Models = () => {
    const [modelType, setType] = useState(true)
    const [about, setAbout] = useState('')
    const [aboutName, setAboutName] = useState('Click to one of the model above to get a description ')
    const description = [
        ['Bio (Biological):', 'Health, sports, nutrition, sleep. Everything that is somehow connected with the state of your body.'],
        ['Psycho (Psychological):', 'Everything related to your mental health, emotional problems, tasks that help you achieve psychological stability.'],
        ['Socio (Social):', 'Your social area of life. Relationship with other people. Maintaining relationships with family and friends. Your social activity as a member of society, etc.'],
        ['Spiritual:', 'The spiritual realm is more for religious people, or those who practice various spiritual practices.'],

    ]

    const changeAbout = (index) => {
        setAboutName(description[index][0])
        setAbout(description[index][1])
    }
    const changeModel = () => {
        setType(!modelType)
    }

    return (
        <>
            <div className="models">
                {modelType ? (
                    <div>
                        <Scroll to='description' smooth={true} className="circle three" onClick={() => changeAbout(1)}><h2 className='movingleft'>Bio</h2></Scroll>
                        <Scroll to='description' smooth={true} className="circle three" onClick={() => changeAbout(2)}><h2 className='movingbottom'>Psycho</h2></Scroll>
                        <Scroll to='description' smooth={true} className="circle three" onClick={() => changeAbout(3)}><h2 className='movingright'>Social</h2></Scroll>
                    </div>
                ) : (
                    <div>
                        <Scroll to='description' smooth={true} className="circle four" onClick={() => changeAbout(0)}><h2 className='movinglefttop'>Bio</h2></Scroll>
                        <Scroll to='description' smooth={true} className="circle four" onClick={() => changeAbout(1)}><h2 className='movingrighttop'>Psycho</h2></Scroll>
                        <Scroll to='description' smooth={true} className="circle four" onClick={() => changeAbout(2)}><h2 className='movingleftbottom'>Social</h2></Scroll>
                        <Scroll to='description' smooth={true} className="circle four" onClick={() => changeAbout(3)}><h2 className='movingrightbottom'>Spiritual</h2></Scroll>
                    </div>
                )}

            </div>
            <button onClick={changeModel}>ChangeModel</button>
            <section id='description' className="about">
                <h2 className='abouttitle'>{aboutName}  </h2>
                <p className='abouttext'>{about}</p>
            </section>
        </>
    )
}