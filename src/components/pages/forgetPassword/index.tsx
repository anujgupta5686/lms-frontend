import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const forgotPasswordSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
});

const ForgotPassword = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // handle form submission, e.g., send data to server
        navigate("/send-otp");

    };

    return (
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#C80B45]">Reset your password</h2>
                <p className="text-center text-gray-600 mb-6">
                    Have no fear. We'll email you instructions to reset your password.
                    If you don't have access to your email we can try account recovery.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email Address *</label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <a href="/" className="text-indigo-500 hover:underline flex items-center justify-center">
                        <AiFillHome className="mr-1" />
                        Back to homepage
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
