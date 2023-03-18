import S from './style'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { DivIcon, Icon, LatLngTuple } from 'leaflet'
import { useIpContext } from '../contexts'
import { iconLocation } from '../../assets/images'

export default function Map() {
  const icon: DivIcon = new Icon({
    iconUrl: iconLocation,
    popupAnchor: [-0, -0],
    iconSize: [32, 38]
  })

  const { data, isLoading } = useIpContext()

  if (isLoading)
    return <span style={{ visibility: 'hidden' }}>Loading map...</span>

  const coordinates: LatLngTuple = [data.location.lat, data.location.lng]

  return (
    <S.Container>
      <MapContainer
        center={coordinates}
        zoom={11}
        scrollWheelZoom={true}
        doubleClickZoom
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={coordinates}>
          <S.PopupS>{coordinates.join(', ')}</S.PopupS>
        </Marker>
      </MapContainer>
    </S.Container>
  )
}
