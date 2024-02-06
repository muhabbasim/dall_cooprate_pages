// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Language from 'src/components/language/Language';
import { cn } from 'src/lib/utils';
import { useLocation } from 'react-router';
import { LuUser2 } from "react-icons/lu";
import Translatable from '../translatable_text/Translatable';

type Props = {
    toggleBar: boolean;
}

type ItemProps = {
    name: string;
    id: string;
}

const navbar_routes = [
    {
      name: 'Home',
      id:"home"
    },
    {
      name: 'Features',
      id:"features"
    },
    {
      name: 'Contact us',
      id:"projects"
    },
    {
      name: 'Categories',
      id:"FAQ"
    },

]

const Navigations = ({ toggleBar }: Props) => {

    const location = useLocation();
    const pathName = location.pathname
    const isCat = pathName.includes('category')
    return (
        <>
            <Box className={cn(`w-full flex gap-6 text-white mx-6`, 
                toggleBar && 'text-black',
                !toggleBar && isCat && 'text-black'
            )}>
                {navbar_routes?.map((item: ItemProps) => (
                    <button
                        className={`w-20 font-medium hover:text-slate-400 ${toggleBar && 'text-black'}`}
                        key={item.id}
                    >
                        <Translatable>
                            {item.name}
                        </Translatable>
                    </button>
                    
                ))}
             
            </Box>
            <div className='w-full flex justify-center items-center gap-4'>
                <div>
                    <LuUser2  
                        style={{ color: 'white' }}
                        className={cn(`w-5 h-5 font-medium cursor-pointer ${toggleBar && 'text-black'}`, !toggleBar && isCat && 'text-black')}
                    />
                </div>
                <Language toggleBar={toggleBar}/>
            
            </div>
        </>
    );
};

export default Navigations;
