import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthContext"
import { useContext } from "react"


const Verify = (props) => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    useEffect(() => {
        setCheck(props.check)
        VerifyToken()

    }, [])

    const VerifyToken = async () => {
        try {
            const response = await axios.get('https://finalserver-lne5.onrender.com/auth/verify')
            if (response.status == 200) {
                return setAuthenticated('true')
            } else {
                setAuthenticated('false')
            }
        } catch (error) {
            setAuthenticated(false)
        }
    }

    if ((props.check && authenticated) || (!props.check && !authenticated)) {
        return props.children;
    }
    return null

}

export default Verify