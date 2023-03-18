import { KeyboardEvent, MouseEvent, useRef, useState } from 'react'
import { iconArrow, iconLocation } from '../../assets/images'
import S from './style'
import { Loader } from '../'
import { useIpContext } from '../contexts'

export default function Header() {
  const inputIp = useRef<HTMLInputElement>(null)

  const { data, isLoading, isError, setIp } = useIpContext()

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
          isError={isError}
        />
        <S.ButtonSearch
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <img src={iconArrow} alt="Icon Arrow" />
        </S.ButtonSearch>
        {isError && <S.Error>Insert a valid IP</S.Error>}
      </S.InputIpContainer>
      <S.Modal>
        {!isLoading ? (
          <ul>
            <li>
              <span>ip address</span>
              <S.Info>{data.ip}</S.Info>
            </li>

            <li>
              <span>location</span>
              <S.Info>
                {data.location.city}, {data.location.region}
              </S.Info>
            </li>
            <li>
              <span>timezone</span>
              <S.Info>{data.location.timezone}</S.Info>
            </li>
            <li>
              <span>isp</span>
              <S.Info>{data.isp}</S.Info>
            </li>
          </ul>
        ) : (
          <Loader />
        )}
      </S.Modal>
    </S.Container>
  )
}
