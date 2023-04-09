import React from "react";

import { fetchWrapper } from '../utils/fetch.wrapper';
import { injected } from '../utils/connectors';

export const apiEndpoint = "/api"

export const userSubject = () => {
    const [value, setValue] = React.useState({token: "", time: 0} as any);
    React.useEffect(() => {
        const stickyValue = window.localStorage.getItem('user');
        if (stickyValue !== null) {
          setValue(JSON.parse(stickyValue));
        }
      }, ['user']);

    React.useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(value));
    }, ['user', value]);
    return [value , setValue];
}

export function useStickyState(defaultValue : any, key : any) {
    const [value, setValue] = React.useState(defaultValue);
  
    React.useEffect(() => {
      const stickyValue = window.localStorage.getItem(key);
  
      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]);
  
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
}



export const connect = async () => {
    return 
}

export const login = async (library : any, account: any)  => {
  if(library){
    // Get message to sign
    const message = await getWelcomeToken();
    // Sign message
    const accounts = await library.eth.getAccounts();
    const signature = await library.eth.personal.sign(message.token, accounts[0]);
    console.log('Data ', message.token, account, signature);
    // Get JWT token
    const jwt = await getAuthToken(message.token, accounts[0], signature);
    console.log('JWT', jwt);
    // Save JWT token
    //setUser({ token: jwt.token });
    return({ token: jwt.token, time: Date.now() });
  }else
    return({});
}

export const getWelcomeToken = async () => {
    return await fetchWrapper.get(`${apiEndpoint}/auth`);
}

export const getAuthToken = (message: string, address: string, signatures: string) => {
    return fetchWrapper.post(`${apiEndpoint}/auth`, { message, address, signatures });
}

export const getPingAuth = (token: string) => {
    return fetchWrapper.post(`${apiEndpoint}/auth/ping`, {}, token);
}

export const logout = () => {
    return "";
}