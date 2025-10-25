// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import Language from 'src/components/language/Language';
import { cn } from 'src/lib/utils';
import { useLocation } from 'react-router';
import Translatable from '../translatable_text/Translatable';
// import { AuthContext } from 'src/context/authContext';
import { DataProps } from 'src/data/DataProps';

type Props = {
    toggleBar: boolean;
    data: DataProps;

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

    // const {currentUser} = useContext(AuthContext)

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

                {/* {currentUser ? (
                    <a target="_blank" href={"ministry-individual-register"} className='flex gap-2'>
                        <LuUser2  
                            style={{ color: 'white' }}
                            className={cn(`w-5 h-5 font-medium cursor-pointer ${toggleBar && 'text-black'}`, !toggleBar && isCat && 'text-black')}
                        />
                        <p className='text-blue-800'>
                            {(currentUser?.first_name)?.toUpperCase()} {(currentUser?.second_name)?.toUpperCase()}
                        </p>
                    </a> 
                ) : (
                    <Link to={`/auth/login/${data?.name}`} className=' text-white'>Login</Link>
                )} */}
                <Language toggleBar={toggleBar}/>
            
            </div>
        </>
    );
};

export default Navigations;
