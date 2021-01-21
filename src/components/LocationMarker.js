import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ iconName, lat, lng, onClick }) => {
    return (
        <div className='locationMarker' onClick={onClick}>
            <Icon 
                icon={iconName}
                className='locationMarker__icon'
            />
        </div>
    )
}

export default LocationMarker;
