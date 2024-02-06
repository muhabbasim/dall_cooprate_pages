// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';

import Navigations from './Navigations';


const MobileSidebar = (toggleBar: any) => {


    return (
        <>
            <Navigations toggleBar={toggleBar}/>
        </>
    );
};

export default MobileSidebar;
