import axios, { AxiosResponse } from 'axios';

const { REACT_APP_API_ENDPOINT } = process.env;

const instance = axios.create({
	baseURL: REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
};

export const search = {
    redditSearch: (data: object): Promise<any> => requests.post('reddit', data),	
};
