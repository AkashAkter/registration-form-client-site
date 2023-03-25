import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="home-banner  flex items-center justify-center">
                <div className='text-center'>
                    <h1 className="banner-title text-white text-5xl">
                        <span>REUNIOR OF</span> <br />
                        <span className='text-[#ff4605]'>PUB STUDENTS</span>
                    </h1>
                    <Link to='/registration'>
                        <button className="btn btn-outline text-white hover:bg-[#ff4605]">Click Here to Register</button>
                    </Link>
                </div>

            </div>



            <section className='my-20'>

                <div className='sand-to-blue p-20 mb-10'>
                    <h3 className='text-center text-5xl text-white font-bold style'>
                        Reunion Date 2nd May 2023
                    </h3>

                </div>


                <div>
                    <img className='w-full h-auto' src="https://png.pngtree.com/background/20210711/original/pngtree-class-reunion-poster-picture-image_1094002.jpg" alt="" />

                </div>

            </section>



        </div>
    );
};

export default Header;