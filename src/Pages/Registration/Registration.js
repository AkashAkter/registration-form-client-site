import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Registration.css'

const Registration = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log(data)

    return (
        <div>

            <div>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                    <input {...register("email")} type="email" placeholder='email' />
                    <input {...register("password")} type="password" placeholder='Password' />
                    <input type="submit" />

                </form>

            </div>

        </div>
    );
};

export default Registration;