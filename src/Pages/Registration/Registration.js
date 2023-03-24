
import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Registration.css'

const Registration = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log(data);

    const onSubmit = (data) => {
        fetch('http://localhost:5000/registeredStudent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data)
            })
    }

    return (
        <div className='reg-section'>
            <div className="body">
                <section className="form-section bg-cyan-50 shadow-2xl shadow-white border-2 border-[#ff4605]">
                    <h1 className='text-center text-2xl font-bold'>Register Now...</h1>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input {...register("Name")} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input {...register("Email")} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-medium">Department</span>
                                </label>
                                <input {...register("Department")} type="text" placeholder="Department Name" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-medium">Batch</span>
                                </label>
                                <input {...register("Batch")} type="number" placeholder="Batch No" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-medium">Student ID</span>
                                </label>
                                <input {...register("Student ID")} type="number" placeholder="ID No" className="input input-bordered w-full max-w-xs h-8 font-medium" required />
                            </div>

                            <div className='my-4'>
                                <button className="btn btn-block btn-outline hover:bg-[#ff4605] font-bold">Register Now</button>
                            </div>


                        </form>

                    </div>
                </section>
            </div>

        </div>
    );
};

export default Registration;