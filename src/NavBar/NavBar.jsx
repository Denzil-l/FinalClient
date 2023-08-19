import { Link, Outlet, NavLink, useNavigate } from "react-router-dom"
import logo from '../Images/x.png'
import Verify from "../Auth/Verify"
import axios from "axios"
import { AuthContext } from "../AuthContext"
import { useContext } from "react"

export const NavBar = () => {
    const Logout = async () => {
        try {
            const res = await axios.delete("https://finalserver-lne5.onrender.com/auth/logout");
            if (res.status === 200) {
                setAuthenticated(false)
                localStorage.setItem("userId", 0);
                localStorage.setItem("accessToken", '');

                navigate("/login");
            }
        } catch (e) {
            console.log(e);
        }
    };
    const { authenticated, setAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate()
    return (
        <header>
            <div className="logo">
                <Link to='/'>
                    <img className="logoimg" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar">
                <Verify check={false}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/Register'>Register</NavLink>
                </Verify>
                <Verify check={true}>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/createTaskM'>Create BPSS Task</NavLink>
                    <NavLink to='/createDailyTask'>Create Daily Task</NavLink>

                    <button className="logout" onClick={Logout}>Logout</button>
                </Verify>
            </div>
        </header>
    )
}