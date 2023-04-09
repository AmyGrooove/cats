import { injected } from '../utils/connectors';

import { useWeb3React } from '@web3-react/core';

export const connectMetamask = () => {
    const {
        activate, active, account, library, chainId,
    } = useWeb3React();

    if(!library)
    activate(injected, undefined, true).catch(() => {
        console.log("Connect error");
    }).then(() => {
        console.log("Connected");
    });
    
    return {activate, active, account, library, chainId};
}