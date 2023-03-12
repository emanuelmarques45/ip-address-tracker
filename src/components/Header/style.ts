import styled from 'styled-components'
import { devices } from '../../assets/GlobalStyle'
import { patternBgDesktop, patternBgMobile } from '../../assets/images'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  background: url(${patternBgMobile}) no-repeat center top;
  padding: 2rem 0 17rem;

  @media (${devices.tablet}) {
    background: url(${patternBgDesktop}) no-repeat center top;
  }

  h1 {
    color: var(--clr-white);
  }
`

const InputIpContainer = styled.div`
  display: flex;
  width: min(50rem, 90vw);
  height: 5rem;
`

const InputIp = styled.input`
  width: 100%;
  border-radius: var(--br) 0 0 var(--br);
  padding: 1rem 2rem;
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

const Modal = styled.div`
  width: min(50rem, 90vw);
  background-color: var(--clr-white);
  border-radius: var(--br);
  padding: 3rem;

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const Info = styled.span`
  font-weight: 700;
`

export default {
  Container,
  InputIpContainer,
  InputIp,
  ButtonSearch,
  Modal,
  Info
}
