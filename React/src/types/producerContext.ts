import { Producer } from "./producer"

export type ProducerContextType = {
    producer: Producer,
    getProducer: (email: string) => any,
    refresh: () => Promise<unknown>,
}