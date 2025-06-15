import { Event } from './event'

export type usersContextType = {
    events: Event[],
    refresh: () => Promise<unknown>,
}