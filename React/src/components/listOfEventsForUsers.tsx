import { useContext, useState } from "react";
import { UsersContext } from "../contexts/users.context";
import { NavLink } from "react-router-dom";

export const ListOfEventsForUsers = () => {
    const { events } = useContext(UsersContext);
    const [filter, setFilter] = useState("");

    // Function to handle input changes
    const handleInputChange = (event: any) => {
        setFilter(event.target.value);
    };

    // Filter events based on the input value
    const filteredEvents = events?.filter(event => 
        event.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <p>סינון:</p>
            <input 
                type="text" 
                name="name" 
                onChange={handleInputChange} 
            />
            {filteredEvents?.map(event => (
                <p key={`${event._id}`}>
                    <NavLink to={`${event._id}`}>{event.name}</NavLink>
                </p>
            ))}
        </>
    );
};
