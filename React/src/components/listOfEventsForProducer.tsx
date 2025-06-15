import { useContext } from "react"
import { UsersContext } from "../contexts/users.context"
import { NavLink } from "react-router-dom";

export const ListOfEventsForProducer = (props: { producerId: any }) => {
    const { events } = useContext(UsersContext); 
    const { producerId } = props;   
    const producerEvents = events?.filter(even => even.producerId == producerId);
    return(
        <>
            {producerEvents?.map(event => <p key={`${event._id}`}><NavLink to={`${event._id}`}>{event.name}</NavLink></p>)}
        </>
    )
}
    

