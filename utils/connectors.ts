// @ts-nocheck
import { InjectedConnector } from '@web3-react/injected-connector'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'


const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", 3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161" },
  //infuraId: INFURA_TOKEN,
  bridge: "https://bridge.walletconnect.punkcats.io",
  qrcode: true,
  pollingInterval: 15000,
})

export const resetWalletConnector = (connector: AbstractConnector) => {
  if (
    connector &&
    connector instanceof WalletConnectConnector
  ) {
    connector.walletConnectProvider = undefined
  }
}