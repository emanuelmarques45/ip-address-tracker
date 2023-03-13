import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from './assets/GlobalStyle'
import { Header, Map } from './components'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Header />
        <Map />
      </QueryClientProvider>
    </>
  )
}
