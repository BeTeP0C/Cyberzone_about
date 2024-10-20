import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from "./styles.module.scss"

type TOurContactsMapProps = {
  width: number,
  height: number
}

export function OurContactsMap ({width, height}: TOurContactsMapProps) {
  return (
    <div className={styles.map}>
      <YMaps>
        <div>
          My awesome application with maps!

          <Map defaultState={{ center: [55.670828, 37.478953], zoom: 15, controls: []}} width={width} height={height}>
            <Placemark geometry={[55.670828, 37.478953]}/>

          </Map>
        </div>
      </YMaps>
    </div>
  )
}
