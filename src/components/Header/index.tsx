import { useRef, useState } from 'react'
import { iconArrow } from '../../assets/images'
import S from './style'
import { getIpInfo } from '../../hooks'
import { Loader } from '../'

export default function Header() {
  const inputIp = useRef<HTMLInputElement>(null)
  const [ip, setIp] = useState<string | undefined>('')

  const { data, isLoading, isError } = getIpInfo(ip)

  return (
    <S.Container>
      <h1>IP Adress Tracker</h1>

      <S.InputIpContainer>
        <S.InputIp
          ref={inputIp}
          type="text"
          placeholder="Search for any IP Adress or domain"
        />
        <S.ButtonSearch onClick={() => setIp(inputIp.current?.value)}>
          <img src={iconArrow} alt="Icon Arrow" />
        </S.ButtonSearch>
      </S.InputIpContainer>
      {isError && <span>Insert a valid IP</span>}
      <S.Modal>
        {!isLoading ? <p>{data.location.region}</p> : <Loader />}{' '}
      </S.Modal>
    </S.Container>
  )
}
