import { useState } from "react";
import { useHttp } from "../customHooks/useHttp"
import { Producer } from "../types/producer";

export const AddProducer = () => {
    const { request } = useHttp('/producer', 'post')
    const [edit, newEdit] = useState(true);

    const save = async(e: any) => {
        e.preventDefault();
        const newProducer: Producer = {
            name: e.target.name.value,
            description: e.target.description.value,
            email: e.target.email.value,
            numberPhon: e.target.numberPhon.value,
        }
        await request(newProducer);
        newEdit(false);
    }

    return(
        <>
        {edit && <form onSubmit={save}>
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
        {!edit && <p>התווספת בהצלחה למפיקות שלנו</p>}
        </>
    )
}