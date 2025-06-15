import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { UsersContext } from "../contexts/users.context"
import { Event } from "../types/event";

export const EventDetailForUsers = () => {
    const { id } = useParams()
    //const numberId = Object(id);
    const { events } = useContext(UsersContext)
    const [event, setEvent] = useState<Event | undefined>(undefined);
    useEffect(() => {
        const currentEvent = events?.find(e => e._id === id);        
        console.log(currentEvent);
        setEvent(currentEvent);
    }, [id])
    return(
        <>
            <h1>{event?.name}</h1>
            <h3>{event?.description}</h3>
            <h3>{event?.date}</h3>
        </>
    )
    
}