import { Popup } from 'react-leaflet'
import styled from 'styled-components'
import { devices } from '../../assets/GlobalStyle'

const Container = styled.div`
  flex: 0.8;

  @media (${devices.mobile}) {
    flex: 1;
  }

  & > div {
    height: 200%;
    position: relative;
    z-index: 1;

    @media (${devices.tablet}) {
      height: 100%;
    }
  }
`

const PopupS = styled(Popup)`
  font-size: var(--fs-400);
  font-family: var(--ff-primary);

  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background-color: var(--clr-gray);
  }
`

export default { Container, PopupS }
