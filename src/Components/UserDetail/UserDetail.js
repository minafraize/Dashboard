import React from 'react';

import LicenseKey from '../LicenseKey/LicenseKey';
import DiscordID from '../DiscordID/DiscordID';
import DownloadApp from '../DownloadApp/DownloadApp';
import Transfer from '../Transfer/Transfer';

const UserDetail = () => {
    return (
        <div>
            <LicenseKey />
            <DiscordID />
            <Transfer />
            <DownloadApp />
        </div>
    );
}

export default UserDetail;
