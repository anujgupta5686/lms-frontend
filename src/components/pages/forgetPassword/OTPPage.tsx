import { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import './otpStyle.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from '../spinner';
import { verifyAndSignup } from '@/services/operations/authAPI'; // Import your thunk action

export default function OTPPage() {
    const [otp, setOtp] = useState('');
    const { signupData, loading } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [signupData, navigate]);

    const handleVerifyAndSignup = (e: any) => {
        e.preventDefault();
        if (signupData) {
            console.log('signupData in otp page', signupData, "And OTP = ", otp);
            const { role, firstName, lastName, email, password, confirmPassword } = signupData;
            dispatch(verifyAndSignup({ role, firstName, lastName, email, password, confirmPassword, otp, navigate }));
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {
                loading ? (
                    <div>
                        <Spinner />
                    </div>
                ) : (
                    <div className="bg-sky-400 rounded-lg shadow-lg p-8 max-w-md w-full relative animate-border-multiple border-4 border-transparent">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Enter OTP</h2>

                        <form onSubmit={handleVerifyAndSignup}>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                placeholder='------'
                                containerStyle="flex justify-center mb-4"
                                renderInput={(props) => <input {...props} />}
                                inputStyle="text-3xl w-12 h-12 border-2 rounded-md mx-1 focus:outline-none focus:border-blue-500"
                            />
                            <p className="text-blue-950 text-md mb-6 text-center">Enter the 6-digit code sent to your phone</p>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                )
            }
        </div>
    );
}
