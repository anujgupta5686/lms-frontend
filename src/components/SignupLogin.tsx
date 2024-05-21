import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { apiConnector } from '@/services/apiconnector';
import { endpoints } from '@/services/apis';

import { sendOtp } from '@/services/operations/authAPI';
import { setSignupData } from '@/slices/authSlice';
const signupSchema = z.object({
    firstName: z.string().min(2, { message: 'First Name must be at least 2 characters long' }),
    lastName: z.string().min(2, { message: 'Last Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string().min(6, { message: 'Confirm password must be at least 6 characters long' }),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const SignupLogin = ({ setIsOpen }: any) => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formOptions = {
        resolver: zodResolver(isSignup ? signupSchema : loginSchema),
    };

    const { register, handleSubmit, reset, unregister, formState: { errors } } = useForm(formOptions);

    const onSubmit = async (data: any) => {
        try {
            const signupData = {
                ...data,
                // role: 'User',
            };

            // Dispatch setSignupData action
            dispatch(setSignupData(signupData));

            // Dispatch sendOtp action
            dispatch(sendOtp(data.email, navigate, setIsOpen));

            // Reset the form
            reset();
        } catch (error) {
            console.error('Error sending OTP:', error);
            // Handle the error as needed (e.g., show an error message to the user)
        }
    };


    const switchMode = () => {
        setIsSignup(!isSignup);
        reset();
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="w-full bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-indigo-500 text-center">
                    {isSignup ? 'Signup' : 'Login'}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {isSignup && (
                        <>
                            <div className="flex justify-between gap-1 md:flex-row flex-col">
                                <div className="flex-1">
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        {...register('firstName')}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                                        placeholder="First Name"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message?.toString()}</p>}
                                </div>
                                <div className="flex-1 mt-1 md:mt-0">
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        {...register('lastName')}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                                        placeholder="Last Name"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message?.toString()}</p>}
                                </div>
                            </div>

                        </>
                    )}
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
                    </div>
                    <div className="relative">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register('password')}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Password"
                        />
                        <div className="absolute inset-y-11 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message?.toString()}</p>}
                    </div>
                    {isSignup && (
                        <div className="relative">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                type={showConPassword ? 'text' : 'password'}
                                {...register('confirmPassword')}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="Confirm Password"
                            />
                            <div className="absolute inset-y-11 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowConPassword(!showConPassword)}>
                                {showConPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message?.toString()}</p>}
                        </div>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            {isSignup ? 'Signup' : 'Signin'}
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    {!isSignup && (
                        <>
                            <Link to="/forgot-password" onClick={() => setIsOpen(false)}>
                                <button

                                    className="text-sm text-indigo-500 hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </Link>
                            <p className="mt-2 text-sm">
                                Don't have an account?{' '}
                                <button
                                    onClick={switchMode}
                                    className="text-indigo-500 hover:underline"
                                >
                                    Signup
                                </button>
                            </p>
                        </>
                    )}
                    {isSignup && (
                        <p className="mt-2 text-sm">
                            Already have an account?{' '}
                            <button
                                onClick={() => {
                                    switchMode();
                                    unregister('name');
                                    unregister('confirmPassword');
                                }}
                                className="text-indigo-500 hover:underline"
                            >
                                Login
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignupLogin;
