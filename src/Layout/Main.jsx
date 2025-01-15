import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Main = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center w-[90%]'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>

            
        </div>
    );
};

export default Main;