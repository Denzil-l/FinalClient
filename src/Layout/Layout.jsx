import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import { Footer } from "../Footer/Footer"

import './Layout.css'



export const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}