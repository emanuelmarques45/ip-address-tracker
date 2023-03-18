import S from './style'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { divIcon, DivIcon, LatLngTuple } from 'leaflet'
import { useIpContext } from '../contexts'
import Loader from '../Loader'
import { useEffect } from 'react'

export default function Map() {
  // const icon: DivIcon = divIcon({
  //   className: 'material-icons',
  //   html: `<div style='background-color:#c30b82;' class='marker-pin'></div><i class='material-icons'>weekend</i>`,
  //   iconUrl:
  //     'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhigoichibafoods.co.jp%2Fnbzmmzga-a2568938.html&psig=AOvVaw04tveS5ss5YdszcGGukrvQ&ust=1678837408808000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDi0OyK2v0CFQAAAAAdAAAAABAO',
  //   iconSize: [40, 40]
  // })

  const { data, isLoading } = useIpContext()

  if (isLoading)
    return <span style={{ visibility: 'hidden' }}>Loading map...</span>

  const coordinates: LatLngTuple = [data.location.lat, data.location.lng]

  return (
    <S.Container>
      <MapContainer
        center={coordinates}
        zoom={12}
        scrollWheelZoom={true}
        doubleClickZoom
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </S.Container>
  )
}
