import axios from "axios"
import { useEffect, useState } from "react"
import { AuthContext } from "../AuthContext"
import { useContext } from "react"


const Verify = (props) => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const [check, setCheck] = useState(false)
    useEffect(() => {
        setCheck(props.check)
        VerifyToken()

    }, [])

    const VerifyToken = async () => {
        try {
            const response = await axios.post('https://finalserver-lne5.onrender.com/auth/verify', {
                accessToken: localStorage.getItem('accessToken')
            })
            if (response.status == 200) {
                return setAuthenticated('true')
            } else {
                setAuthenticated('false')
            }
            console.log(`Аутенфикация ${authenticated}`)

        } catch (error) {
            setAuthenticated(false)
            console.log(`Аутенфикация ${authenticated}`)

        }

    }

    if ((props.check && authenticated) || (!props.check && !authenticated)) {
        return props.children;
    }
    return null

}

export default Verify