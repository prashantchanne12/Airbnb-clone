import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

const Maps = ({searchResults}) => {

    const [selectedLocation, setSelectedLocation] = useState({});

    const coordinates = searchResults.map(item => ({latitude: item.lat, longitude: item.long}));

    const center = getCenter(coordinates);

    const [viewPort, setViewPort] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    }); 

    return (
        <ReactMapGL
            width='100%'
            height='100%'
            mapStyle='mapbox://styles/void121/ckusg4kh82bl517mx2gnpmtit'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewPort}
            onViewStateChange={(nextViewPort) => setViewPort(nextViewPort)}
        >
            {searchResults.map(item => (
                <div key={item.long}>
                    <Marker
                        latitude={item.lat}
                        longitude={item.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p 
                            role='img'
                            className='cursor-pointer text-2xl animate-bounce'
                            aria-label='push-pin'
                            onClick={() => setSelectedLocation(item)}
                        >
                            📌
                        </p>
                    </Marker>

                    {selectedLocation?.long === item.long && (
                        <Popup
                        onClose={() => {
                            setSelectedLocation({});

                        }}
                            closeOnClick={true}
                            latitude={item.lat}
                            longitude={item.long}
                        >{item.title}</Popup>
                    )}

                </div>
            ))}


        </ReactMapGL>
    )
}

export default Maps;
