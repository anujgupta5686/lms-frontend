import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create an Axios instance
export const axiosInstance: AxiosInstance = axios.create({});

// Define the types for the function parameters
type HttpMethod = 'GET' | 'get' | 'POST' | 'post' | 'PUT' | 'put' | 'DELETE' | 'delete' | 'PATCH' | 'patch';
interface ApiConnectorParams {
    method: HttpMethod;
    url: string;
    bodyData?: any; // Use a more specific type if you know the structure of bodyData
    header?: Record<string, string>;
    params?: Record<string, any>;
}

// Define the function with proper types
export const apiConnector = async ({
    method,
    url,
    bodyData,
    header,
    params
}: ApiConnectorParams): Promise<AxiosResponse> => {
    const config: AxiosRequestConfig = {
        method,
        url,
        data: bodyData,
        headers: header,
        params
    };

    return axiosInstance(config);
};
