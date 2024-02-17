// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';

import MobileNavigations from './MobileNavigations';


const MobileSidebar = (toggleBar: any) => {


    return (
        <>
            <MobileNavigations toggleBar={toggleBar}/>
        </>
    );
};

export default MobileSidebar;
