import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import fireAlert from '@iconify/icons-mdi/fire-alert';
import snowflakeVariant from '@iconify-icons/mdi/snowflake-variant';
import iceShelf from '@iconify-icons/openmoji/ice-shelf';
// import volcanoIcon from '@iconify-icons/emojione-v1/volcano';

// const NATURAL_EVENT_DROUGHT = 6;
// const NATURAL_EVENT_DUSTandHAZE = 7;
const NATURAL_EVENT_WILDFIRE = 8;
// const NATURAL_EVENT_FLOODS = 9;
// const NATURAL_EVENT_VOLCANO = 12;
// const NATURAL_EVENT_LANDSLIDE = 14;
const NATURAL_EVENT_ICEBERG = 15;
const NATURAL_EVENT_SNOW = 17;



const Map = ({ eventData, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null);

    const marker = eventData.map(event => {
        if(event.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return (
                <LocationMarker 
                    iconName={fireAlert}
                    lat={ event.geometries[0].coordinates[1] }
                    lng={ event.geometries[0].coordinates[0] }
                    onClick={() => {
                        setLocationInfo({
                            id: event.id,
                            title: event.title
                        })
                    }}
                />
            );
        }

        // these are for other disasters

        // else if(event.categories[0].id === NATURAL_EVENT_VOLCANO){
        //     return (
        //         <LocationMarker 
        //             iconName={volcanoIcon}
        //             lat={ event.geometries[0].coordinates[1] }
        //             lng={ event.geometries[0].coordinates[0] }
        //                 onClick={() => {
        //                     setLocationInfo({
        //                         id: event.id,
        //                         title: event.title
        //                     })
        //                 }}
        //         />
        //     );
        // }
        else if(event.categories[0].id === NATURAL_EVENT_ICEBERG){
            return (
                <LocationMarker 
                    iconName={iceShelf}
                    lat={ event.geometries[0].coordinates[1] }
                    lng={ event.geometries[0].coordinates[0] }
                    onClick={() => {
                        setLocationInfo({
                            id: event.id,
                            title: event.title
                        })
                    }}
                />
            );
        }
        else if(event.categories[0].id === NATURAL_EVENT_SNOW){
            return (
                <LocationMarker 
                    iconName={snowflakeVariant}
                    lat={ event.geometries[0].coordinates[1] }
                    lng={ event.geometries[0].coordinates[0] }
                    onClick={() => {
                        setLocationInfo({
                            id: event.id,
                            title: event.title
                        })
                    }}
                />
            );
        }
        else {
            return null;
        }
    })
    
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                { marker }
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
};

export default Map;
