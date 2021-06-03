import React from 'react';
import Head from 'next/head';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/lib/theme';
import AppContextProvider from '@/contexts/index';
import fetcher from '@/data/fetcher';
import { SWRConfig } from 'swr';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

const MyApp = (props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          <SWRConfig
            value={{
              fetcher,
              onError: (error) => {
                if (error.status !== 403 && error.status !== 404) {
                  // Debug errors globally
                }
              },
            }}
          >
            <Component {...pageProps} />
          </SWRConfig>
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
