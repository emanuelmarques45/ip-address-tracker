import styled from 'styled-components'
import { devices } from '../../assets/GlobalStyle'

const Container = styled.div`
  flex: 1;

  & > div {
    height: 200%;
    position: relative;
    z-index: 1;

    @media (${devices.tablet}) {
      height: 100%;
    }
  }
`

export default { Container }
