import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../contexts/users.context";
import { Event } from "../types/event"
import { useHttp } from "../customHooks/useHttp";

export const EventDetailForProducer = () => {
    const { id } = useParams()
    //const numberId = Number(id);
    const { events, refresh } = useContext(UsersContext)
    const [event, setEvent] = useState<Event>();
    const [edit, setEdit] = useState(false);
    const { request } = useHttp(`/event/${id}`, 'put');
    const deleteRequest = useHttp(`/event/${id}`, 'delete').request;

    useEffect(() => {
        console.log("in useEffect");
        
        const currentEvent = events?.find(e => e._id === id);        
        setEvent(currentEvent);
    }, [id])

    const editing = () => {
        setEdit(true);
    }

    const save = async(e: any) => {
        e.preventDefault();
        
        const updateEvent: Event = {
            name: e.target.name.value,
            description: e.target.description.value,
            date: e.target.date.value,
            producerId: event!.producerId,
            _id: event!._id
        }
        console.log("updateEvent", updateEvent);
        
        await request(updateEvent);
        refresh!();
        setEvent(updateEvent)
        setEdit(false);        
    }

    const deleting = async() => {
        await deleteRequest();
        return(
            <>
            <h3>האירוע נמחק בהצלחה</h3>            
            </>
        )
    }

    return(
        <>
            {!edit && <div>
            <h1>{event?.name}</h1>
            <h3>{event?.description}</h3>
            <h3>{event?.date}</h3>
            <button onClick={() => editing()}>עריכה</button>
            <button onClick={() => deleting()}>מחיקה</button>
            </div>}
            {edit && <form onSubmit={save}>
                <h5>שם האירוע:</h5>
                <input name="name" type="text" />
                <h5>תיאור האירוע:</h5>
                <input name="description" type="text" />
                <h5>תאריך:</h5>
                <input name="date" type="text" /><br/>
                <button>שמירה</button>
            </form>}
        </>
    )
}