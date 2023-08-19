import { useEffect, useState } from "react"

export const Cell = ({ i, className, type, content }) => {
    const [done, setDone] = useState(false)

    const ChangeDone = () => {
        if (type === 'cell') {
            setDone(!done)
        }
    }

    return (
        <div key={`${type}${i}`} className={className} onClick={ChangeDone}>
            {content}
            {done ? 'X' : null}

        </div>
    )
}