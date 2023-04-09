import React, { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Script from 'next/script';

import { AppContext, appContextData } from '../services/app.context';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const getLibrary = (provider : any, connector : any) => new Web3(provider);

  return (
    <AppContext.Provider value={appContextData}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=0"
        />
        <Script
          strategy="lazyOnload"
        >
          {
            `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '0');
            `
          }
        </Script>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
