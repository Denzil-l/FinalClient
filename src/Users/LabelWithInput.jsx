
const InputWithlabel = (props) => {
    const setSomething = props.onChange

    return (
        <>
            <label htmlFor={props.name}>{props.name}</label>
            <input type={props.type} name={props.name} value={props.value} onChange={e => setSomething(e.target.value)} />
        </>
    )
}

export default InputWithlabel