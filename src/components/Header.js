import React from 'react';
import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
    return (
        <div className='header'>
            <header>
                <h1><Icon icon={fireIcon} /> Wildfire Tracker <small>(Powered by NASA)</small></h1>
            </header>
        </div>
    )
}

export default Header;
