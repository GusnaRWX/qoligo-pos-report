import '@/styles/globals.css'
import Head from 'next/head'
import createEmotionCache from '@/utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/utils/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

const clientSideEmotionCache = createEmotionCache()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
})

export default function App (props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [isRender, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!isRender) {
    return null
  }
  return (

    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </CacheProvider>

  )
}
