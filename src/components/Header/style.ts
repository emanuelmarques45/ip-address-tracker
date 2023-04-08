import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { devices } from '../../assets/GlobalStyle'
import { patternBgDesktop, patternBgMobile } from '../../assets/images'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  text-align: center;
  background: url(${patternBgMobile}) no-repeat center top;
  padding: 2rem 0 13rem;

  @media (${devices.mobile}) {
    background: url(${patternBgDesktop}) no-repeat center top;
  }

  h1 {
    color: var(--clr-white);
  }
`

const InputIpContainer = styled(motion.div)`
  position: relative;
  display: flex;
  width: min(50rem, 85vw);
  height: 5rem;
`

const InputIp = styled.input.attrs((props: { isError: boolean }) => ({
  isError: props.isError
}))`
  width: 100%;
  border-radius: var(--br) 0 0 var(--br);
  padding: 1rem 2rem;

  &::placeholder {
    font-size: var(--fs-300);
  }

  @media (${devices.tablet}) {
    &::placeholder {
      font-size: var(--fs-400);
    }
  }

  ${props =>
    props.isError &&
    css`
      animation: shake 0.1s ease 0s 2;
      box-shadow: 0 0 0.5rem red;

      @keyframes shake {
        0% {
          margin-left: 0rem;
        }
        25% {
          margin-left: 0.5rem;
        }
        75% {
          margin-left: -0.5rem;
        }
        100% {
          margin-left: 0rem;
        }
      }
    `}
`

const ButtonSearch = styled.span`
  display: block;
  background-color: var(--clr-black);
  height: 100%;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 var(--br) var(--br) 0;
`

const Info = styled.span`
  font-weight: var(--fw-semi-bold);
`

const Modal = styled.div`
  width: min(120rem, 85vw);
  background-color: var(--clr-white);
  border-radius: var(--br);
  position: absolute;
  z-index: 2;
  top: 18rem;

  ul {
    display: flex;
    flex-direction: column;

    @media (${devices.mobile}) {
      flex-flow: row wrap;
    }

    @media (${devices.tablet}) {
      justify-content: space-between;

      li {
        text-align: left;
        padding: 4rem;
        gap: 2rem;
        font-size: var(--fs-500);

        span:not(${Info}) {
          font-size: var(--fs-300);
        }
      }
    }
  }

  li {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: var(--fs-400);
    position: relative;

    span:not(${Info}) {
      text-transform: uppercase;
      font-size: var(--fs-200);
      color: var(--clr-dark-gray);
      font-weight: var(--fw-bold);
    }

    @media (${devices.tablet}) {
      &:not(:first-child)::after {
        content: '';
        position: absolute;
        background-color: var(--clr-gray);
        width: 0.1rem;
        height: 50%;
        left: 0;
        top: 50%;
        translate: 0 -50%;
      }
    }
  }
`

const Error = styled.span`
  position: absolute;
  left: 1rem;
  top: -2.5rem;
  color: var(--clr-red);
`

export default {
  Container,
  InputIpContainer,
  InputIp,
  ButtonSearch,
  Modal,
  Info,
  Error
}
