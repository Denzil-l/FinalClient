import { useEffect, useState } from "react"

export const Error = ({ message }) => {

    return (
        <div>
            <h2>Something was wrong 404</h2>
            <h4>Route {message} not available or does not exist</h4>
        </div>

    )
}