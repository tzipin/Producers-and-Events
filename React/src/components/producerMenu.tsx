import { NavLink } from "react-router-dom"

export const ProducerMenu = () => {
    return(
        <>
            <NavLink to="/producers/existProducer">מפיקה קיימת</NavLink><br/>
            <NavLink to="/producers/newProducer">מפיקה חדשה</NavLink>
        </>
    )
}