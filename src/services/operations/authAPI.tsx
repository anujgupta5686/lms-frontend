import { toast } from 'react-hot-toast'
import { setToken, setLoading } from '@/slices/authSlice'
import { apiConnector } from '../apiconnector'
import { endpoints } from '../apis'
import { AxiosResponse } from 'axios';
const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API
} = endpoints;

export function sendOtp(email: string, navigate: any, setIsOpen: any) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response: AxiosResponse = await apiConnector({
                method: 'POST',
                url: SENDOTP_API,
                bodyData: { email },
            })
            setIsOpen(false)
            console.log("SENDOTP API RESPONSE : ", response);
            console.log(response.data.success);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("OTP Sent Successfully");
            navigate('/otp-page');
        } catch (err) {
            {
                console.log("SENDOTP API ERROR............", err);
                toast.error("Could Not Send OTP");

            }
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export async function signup(
    role: string,
    firstName: string,
    lastName: string,
    email: string,
    password: any,
    confirmPassword: any,
    otp: number,
    navigate: any
) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response: AxiosResponse = await apiConnector({
                method: 'POST',
                url: SIGNUP_API,
                bodyData: {
                    role,
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    otp
                }
            });
            console.log("SIGNUP API RESPONSE : ", response);
            console.log(response.data.success);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Signup Successful");
            navigate('/login');
        }
        catch (err) {
            console.log("SIGNUP API ERROR............", err);
            toast.error("Signup Failed");
            navigate("/signup");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}