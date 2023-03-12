import { KeyboardEvent, MouseEvent, useRef, useState } from 'react'
import { iconArrow } from '../../assets/images'
import S from './style'
import { getIpInfo } from '../../hooks'
import { Loader } from '../'

export default function Header() {
  const inputIp = useRef<HTMLInputElement>(null)
  const [ip, setIp] = useState<string | undefined>('')

  const { data, isLoading, isError } = getIpInfo(ip)

  function handleKeyDown(
    ev: KeyboardEvent<HTMLInputElement | HTMLButtonElement>
  ) {
    if (ev.key === 'Enter' || ev.key === 'Numpad Enter') {
      setIp(inputIp.current?.value)
    }
  }

  function handleClick(ev: MouseEvent<HTMLButtonElement>) {
    setIp(inputIp.current?.value)
  }

  return (
    <S.Container>
      <h1>IP Adress Tracker</h1>

      <S.InputIpContainer>
        <S.InputIp
          ref={inputIp}
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Search for any IP Adress or domain"
        />
        <S.ButtonSearch
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
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
