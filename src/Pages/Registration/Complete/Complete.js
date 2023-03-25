import React from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
    return (
        <div className='sand-to-blue text-center py-60 shadow-2xl shadow-black'>
            <h1 className='text-white text-5xl banner-title'>REGISTRATION COMPLETE</h1>

            <Link to='/students'>
                <button className="btn btn-outline text-white banner-title shadow-2xl px-20">click here to see registered students</button>
            </Link>
        </div>
    );
};

export default Complete;