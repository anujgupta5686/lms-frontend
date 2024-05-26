import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '@/services/operations/authAPI';
// import { loginUser } from '@/services/operations/authAPI';

const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formOptions = {
        resolver: zodResolver(loginSchema),
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions);

    const onSubmit = async (data: any) => {
        try {
            console.log("Login Data", data)
            dispatch(login(data.email, data.password, navigate));
            reset();
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="w-full bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-indigo-500 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            Signin
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/forgot-password">
                        <button className="text-sm text-indigo-500 hover:underline">
                            Forgot Password?
                        </button>
                    </Link>
                    <p className="mt-2 text-sm">
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/signup')}
                            className="text-indigo-500 hover:underline"
                        >
                            Signup
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
