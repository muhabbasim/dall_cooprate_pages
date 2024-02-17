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

const MobileNavigations = ({ toggleBar }: Props) => {

    const location = useLocation();
    const pathName = location.pathname
    const isCat = pathName.includes('category')
    return (
        <>
            <Box className={cn(`w-[220px] flex flex-col gap-1 mx-6 h-full justify-center items-center`, 
                toggleBar && 'text-black',
                !toggleBar && isCat && 'text-black'
            )}>
                {navbar_routes?.map((item: ItemProps) => (
                    <button
                        className={`w-30 font-medium flex items-center justify-center  transition-all rounded-xl px-5 py-3 hover:bg-slate-100 ${toggleBar && 'text-black'}`}
                        key={item.id}
                    >
                        <Translatable>
                            {item.name}
                        </Translatable>
                    </button>
                    
                ))}
             
                <div className='w-full flex flex-col justify-center items-center gap-1'>
                    <div className=' px-5 py-1 transition-all rounded-xl hover:bg-slate-100'>
                        <Language toggleBar={toggleBar}/>
                    </div>
                    
                    <div className=' px-5 py-3 transition-all rounded-xl hover:bg-slate-100'>
                        <LuUser2  
                            style={{ color: 'white' }}
                            className={cn(`w-5 h-5 font-medium cursor-pointer ${toggleBar && 'text-black'}`, !toggleBar && isCat && 'text-black')}
                        />
                    </div>
                
                </div>
            </Box>
        </>
    );
};

export default MobileNavigations;
