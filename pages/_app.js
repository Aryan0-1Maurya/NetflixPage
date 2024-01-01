import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';

// css
// import '../styles/globals.css'

// utils
import createEmotionCache from '../utils/createEmotionCache';
import theme from '../utils/theme';



const clientSideEmotionCache = createEmotionCache();


export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix landing page" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
