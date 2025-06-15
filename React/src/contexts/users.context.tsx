import { createContext } from "react";
import { usersContextType } from "../types/usersContext";
import { useHttp } from "../customHooks/useHttp";
import { Event } from '../types/event';

export const UsersContext = createContext<Partial<usersContextType>>({});

export const UsersProvider = (props: any) => {
    const { data: events, isLoading, error, request } = useHttp<Event[]>('/event', 'get');

    const contextValue: usersContextType = {
        events: events!,
        async refresh() {
            request();
        },        
    }

    return(
        <UsersContext.Provider value={contextValue}>
            { isLoading && 'Loading...' }
            { error && error }
            { !error && props.children }
        </UsersContext.Provider>
    )
}