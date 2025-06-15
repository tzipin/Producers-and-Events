import { createContext } from "react";
import { ProducerContextType } from "../types/producerContext";
import { useHttp } from "../customHooks/useHttp";
import { Producer } from "../types/producer";

export const ProducerContext = createContext<Partial<ProducerContextType>>({});

export const ProducerProvider = (props: any) => {
    const { email } = props;
    //קריאת שרת לקבלת רשימת המפיקות
    //לבדוק!!!!!!!!!!!!
    const { data: producer, isLoading, error, request } = useHttp<Producer>(`/${email}`, 'get');
    const contextValue: ProducerContextType = {
        producer: producer!,
        getProducer (email: string) {
           return producer;
        },
        async refresh() {
            await request();
        },
        
    }

    return (
        <ProducerContext.Provider value={contextValue}>
            { isLoading && 'Loading...' }
            { error && error }
            { !error && props.children }
        </ProducerContext.Provider>
    )
}
