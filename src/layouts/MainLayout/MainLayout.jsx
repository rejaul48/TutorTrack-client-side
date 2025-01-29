import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Mainlayout = () => {
    return (
        <>
            <div className='bg-[#FF7AAC] py-2 sticky top-0 z-50 h-auto'>
                <Header ></Header>
            </div>

            <Outlet ></Outlet>

            <div>
                <Footer ></Footer>
            </div>

        </>
    )
}

export default Mainlayout
