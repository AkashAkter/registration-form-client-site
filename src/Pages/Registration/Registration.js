
import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Registration.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    // console.log(data);

    const navigate = useNavigate();

    const onSubmit = (data) => {
        fetch('https://alumni-registration-page-server.vercel.app/registeredStudent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                // console.log(data);
                toast("Registration Complete!");
                setTimeout(() => {
                    navigate('/complete');
                }, 3000);
            })
    }

    return (
        <div className='reg-section'>
            <div className="body">
                <section className="form-section backgrond shadow-2xl shadow-white">
                    <h1 className='text-center text-2xl font-bold'>Register Now...</h1>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <ToastContainer
                                position="top-center"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            {/* Same as */}
                            {/* <ToastContainer /> */}

                            <div className="form-control w-full max-w-xs shadow-2xl shadow-cyan-900">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input {...register("Name")} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs  shadow-2xl shadow-cyan-900">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input {...register("Email")} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs  shadow-2xl shadow-cyan-900">
                                <label className="label">
                                    <span className="label-text font-medium">Department</span>
                                </label>
                                <input {...register("Department")} type="text" placeholder="Department Name" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs  shadow-2xl shadow-cyan-900">
                                <label className="label">
                                    <span className="label-text font-medium">Batch</span>
                                </label>
                                <input {...register("Batch")} type="number" placeholder="Batch No" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs  shadow-2xl shadow-cyan-900">
                                <label className="label">
                                    <span className="label-text font-medium">Student ID</span>
                                </label>
                                <input {...register("Student_ID")} type="number" placeholder="ID No" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs  shadow-2xl shadow-cyan-900">
                                <label className="label">
                                    <span className="label-text font-medium">Contact Number</span>
                                </label>
                                <input {...register("Phone")} type="number" placeholder="Contact Number" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className='my-4  shadow-2xl shadow-cyan-900'>
                                <button className="btn btn-block btn-outline hover:bg-[#B4A3BE] hover:text-black font-bold">
                                    Register Now
                                </button>
                            </div>


                        </form>

                    </div>
                </section>
            </div>

        </div>
    );
};

export default Registration;