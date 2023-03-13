import { useQuery } from 'react-query'
import { validateIp } from '../utils'

export function getIpInfo(ip: string | undefined) {
  const isError = ip && !validateIp(ip)
  ip = validateIp(ip)

  const { data, isLoading } = useQuery(['ip', ip], async () => {
    const API_KEY = import.meta.env.VITE_API_KEY
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const URL = `${BASE_URL}?apiKey=${API_KEY}&ipAddress=${ip}`

    return await fetch(URL).then(data => data.json())
  })
  // const fake = {
  //   ip: '10.10.10.10',
  //   location: {
  //     city: 'Itajaí',
  //     region: 'Santa Catarina',
  //     timezone: 'UTC -03:00'
  //   },
  //   isp: 'Google unitelecomunicacoes sa ltda '
  // }

  return {
    data,
    isLoading,
    isError
  }
}
