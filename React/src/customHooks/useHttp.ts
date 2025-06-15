import axios from "axios";
import { HttpMethod } from '../types/httpMethod.ts'
import { useCallback, useEffect, useState } from "react";

const server = axios.create({
    baseURL: 'http://localhost:3000'
});

export function useHttp<T>(url: string, method: HttpMethod){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErorr] = useState('');
    const [data, setData] = useState<T>();

    const request = useCallback(async (...params: any[]) => {
        console.log("request");
        
        setIsLoading(true);
        setErorr('');
        try{
            const result = await server[method]<T>(url, ...params);
            console.log("in request", result.data);
            
            setData(result.data);
        }
        catch(error){            
            setErorr('error');
        }
        finally{
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        if (method === 'get') {
            request();
        }
    }, [])

    return { data, isLoading, error, request };
}