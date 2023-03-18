import { createContext, Dispatch, ReactNode, useContext, useState } from 'react'
import { getIpInfo } from '../../../hooks'

export interface IIpContext {
  data: {
    ip: string
    isp: string
    location: {
      city: string
      country: string
      lat: number
      lng: number
      region: string
      timezone: string
    }
  }
  ip: string | undefined
  setIp: Dispatch<React.SetStateAction<string | undefined>>
  isLoading: boolean
  isError: boolean
}

const IpContext = createContext<IIpContext>({} as IIpContext)

interface IIpContextProvider {
  children: ReactNode
}

function IpContextProvider(props: IIpContextProvider) {
  const [ip, setIp] = useState<IIpContext['ip']>('')

  const { data, isLoading, isError } = getIpInfo(ip)

  return (
    <IpContext.Provider value={{ data, isLoading, isError, ip, setIp }}>
      {props.children}
    </IpContext.Provider>
  )
}

function useIpContext() {
  return useContext(IpContext)
}

export { IpContextProvider, useIpContext }
