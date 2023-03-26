import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="home-banner  flex items-center justify-center">
                <div className='text-center'>
                    <h1 className="banner-title text-white text-5xl">
                        <span>REUNION OF</span> <br />
                        <span className='text-[#B4A3BE]'>PUB STUDENTS</span>
                    </h1>
                    <Link to='/registration'>
                        <button className="btn btn-outline text-white hover:bg-[#B4A3BE]">Click Here to Register</button>
                    </Link>
                </div>

            </div>



            <section className='my-20'>

                <div className='flex shadow-2xl shadow-black my-20'>
                    <div className='sand-to-blue p-20 w-1/2'>
                        <h3 className='text-center text-5xl text-[#B4A3BE] text-shadow font-bold style'>
                            REUNION<span className='text-white'>DATE</span>
                        </h3>

                    </div>
                    <div className='sand-to-blue p-20 w-1/2'>
                        <h3 className='text-center text-5xl text-[#B4A3BE] text-shadow font-bold style'>
                            2nd MAY 2023
                        </h3>

                    </div>
                </div>


                <div>
                    <img className='w-full h-auto' src="https://t3.ftcdn.net/jpg/02/30/04/06/360_F_230040647_ogfpK4UuuaYVMtQCcYvOe1BO5H8bLmE0.jpg" alt="" />

                </div>

            </section>



        </div>
    );
};

export default Header;