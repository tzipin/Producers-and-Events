import { useContext, useState } from "react";
import { useHttp } from "../customHooks/useHttp";
import { Producer } from "../types/producer";
import { ListOfEventsForProducer } from "./listOfEventsForProducer"
import { UsersContext } from "../contexts/users.context";

export const ProducerDetails = (props:{email: any}) => {
    const { email } = props;
    const { data:producer } = useHttp<Producer>(`/producer/${email}`, 'get'); 
    const postRequest = useHttp(`/event`, 'post').request;
    const putRequest = useHttp(`/producer/${email}`, 'put').request;
    const { refresh } = useContext(UsersContext)
    const [edit, setEdit] = useState(false);
    const [adding, setAdding] = useState(false);

    const save = async(event: any) => {
        event.preventDefault();
        const updateProducer: Producer = {
            _id: producer!._id,
            name: event.target.name.value,
            description: event.target.description.value,
            email: event.target.email.value,
            numberPhon: event.target.numberPhon.value,
        }
        
        await putRequest(updateProducer);
        setEdit(false);        
    }

    const add = async(e: any) => {
        e.preventDefault();
        const newEvent: any = {
            name: e.target.name.value,
            description: e.target.description.value,
            date: e.target.date.value,
            producerId: producer!._id,
        }
        await postRequest(newEvent);
        refresh!();
        setAdding(false);        
    }
         
    return(
        <>
            {producer && !edit && <div>
                <h2>{ producer?.name }</h2>
                <h4>{producer.description}</h4>
                <h5>מייל: {producer.email}</h5>
                <h5>מס' טלפון: {producer.numberPhon}</h5>
                <button onClick={() => setEdit(true)}>עריכה</button>
                <button onClick={() => setAdding(true)}>הוספת אירוע</button>
            </div>}
            {producer && edit && <form onSubmit={save}>
                <h5>שם:</h5>
                <input name="name" type="text" />
                <h5>תאור:</h5>
                <input name="description" type="text" />
                <h5>מייל:</h5>
                <input name="email" type="text" />
                <h5>מס' טלפון:</h5>
                <input name="numberPhon" type="text" />
                <button>שמירה</button>
                </form>}
            {producer && adding && <form onSubmit={add}>
                <h5>שם האירוע:</h5>
                <input name="name" type="text" />
                <h5>תיאור האירוע:</h5>
                <input name="description" type="text" />
                <h5>תאריך:</h5>
                <input name="date" type="text" /><br/>
                <button>שמירה</button>
                </form>}
            {!producer && <p>לא נמצאה מפיקה כנראה כתובת המייל שגויה</p>}
            <ListOfEventsForProducer producerId = {producer?._id}/>
        </>
    )
}

