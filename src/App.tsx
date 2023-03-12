import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from './assets/GlobalStyle'
import { Header } from './components'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </>
  )
}
