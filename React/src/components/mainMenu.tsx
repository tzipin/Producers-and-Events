import { NavLink } from "react-router-dom"
export const MainMenu = () => {
    
    return(
        <div>
            <NavLink to="/producers">מפיקות</NavLink><br/>
            <NavLink to="/users">משתמשים</NavLink>
        </div>
    )
}