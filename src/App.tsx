import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from './assets/GlobalStyle'
import { Header, Map } from './components'
import { IpContextProvider } from './components/contexts'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <IpContextProvider>
          <Header />
          <Map />
        </IpContextProvider>
      </QueryClientProvider>
    </>
  )
}
