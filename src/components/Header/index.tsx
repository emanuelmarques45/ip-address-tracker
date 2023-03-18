import { KeyboardEvent, MouseEvent, useRef } from 'react'
import { iconArrow } from '../../assets/images'
import S from './style'
import { Loader } from '../'
import { useIpContext } from '../contexts'
import { motion, Variants } from 'framer-motion'

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

  const infoAnimation: Variants = {
    initial: {
      opacity: 0.5,
      y: -40
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const inputAnimation: Variants = {
    initial: {
      opacity: 0,
      x: -150
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4
      }
    }
  }

  const titleAnimation = {
    initial: {
      opacity: 0,
      y: -30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        timingFunction: 'linear',
        duration: 0.6
      }
    }
  }

  return (
    <S.Container>
      <>
        <motion.h1
          variants={titleAnimation}
          initial="initial"
          animate="animate"
        >
          IP Adress Tracker
        </motion.h1>

        <S.InputIpContainer
          variants={inputAnimation}
          initial="initial"
          animate="animate"
        >
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
            <motion.ul
              variants={infoAnimation}
              initial="initial"
              animate="animate"
            >
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
            </motion.ul>
          ) : (
            <Loader />
          )}
        </S.Modal>
      </>
    </S.Container>
  )
}
