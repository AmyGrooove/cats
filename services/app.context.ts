import {createContext} from 'react';

export const appContextData = {
    data: {
        catCount : 3234
    },
};


export const AppContext = createContext(appContextData);