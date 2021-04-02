import React from 'react'
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";

import mapIconSelected from './mapIconSelected.svg'
import mapIcon from './mapIcon.svg'

const mapStyles = {
    width: '100%',
    height: '100%'
}

const MapComponent = (props) => {
    let video = props.video;

    const hideVideo = () => {
        props.hideVideo(false)
    }

    return (
        <div class="map-component">
            <YMaps>
                <Map style={mapStyles} state={{ center: props.center, zoom: props.zoom }}>
                    {props.data.map(item => <Placemark geometry={item.coords}
                        modules={['geoObject.addon.balloon']}
                        properties={{
                            balloonContentHeader: item.title,
                            balloonContentBody: `
                                <img width="300" src="${item.image}" />
                                <p>${item.text}</p>
                            `,
                            // iconContent: mapIcon
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: item.id === props.selectedPlace ? mapIconSelected : mapIcon,
                            iconImageSize: [30, 42],
                        }}
                    />)}

                    {props.routes.map(route => <Polyline geometry={route.coords}
                        options={{
                            strokeWidth: 5,
                            strokeColor: '#000'
                        }}
                        properties={{
                            balloonContentHeader: route.title,
                            balloonContentBody: `
                                <img width="300" src="${route.image}" />
                                <p>${route.text}</p>
                            `,
                        }}
                    />)}
                </Map>
            </YMaps>

            {video ? <div class="map-component__video">
                <div class="map-component__video-close" onClick={hideVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.26933 329">
                        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" fill="white" />
                    </svg>
                </div>

                <iframe width="100%" height="500" src="https://www.youtube.com/embed/j4SJUbDuirk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> : <div />}
        </div>

    )
}

export default MapComponent