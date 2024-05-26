import { toast } from 'react-hot-toast';
import { setToken, setLoading } from '@/slices/authSlice';
import { apiConnector } from '../apiconnector';
import { endpoints } from '../apis';
import { AxiosResponse } from 'axios';
import { setUser } from '@/slices/profileSlice';

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
} = endpoints;

export function sendOtp(email: string, navigate: any) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response: AxiosResponse = await apiConnector({
                method: 'POST',
                url: SENDOTP_API,
                bodyData: { email },
            });
            console.log("SENDOTP API RESPONSE : ", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("OTP Sent Successfully");
            navigate('/otp-page');
        } catch (err) {
            console.log("SENDOTP API ERROR............", err);
            toast.error("Could Not Send OTP");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function signup(
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
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Signup Successful");
            navigate('/login');
        } catch (err) {
            console.log("SIGNUP API ERROR............", err);
            toast.error("Signup Failed");
            navigate("/signup");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function verifyAndSignup(
    { role, firstName, lastName, email, password, confirmPassword, otp, navigate }:
        { role: string, firstName: string, lastName: string, email: string, password: string, confirmPassword: string, otp: string, navigate: any }
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
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Signup Successful");
            navigate('/login');
        } catch (err) {
            console.log("SIGNUP API ERROR............", err);
            toast.error("Signup Failed");
            navigate("/signup");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function login(email: string, password: string, navigate: any) {
    return async (dispatch: any) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response: AxiosResponse = await apiConnector({
                method: 'POST',
                url: LOGIN_API,
                bodyData: { email, password },
            });
            console.log("Login API RESPONSE : ", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("User Login Successfully");
            dispatch(setToken(response.data.token));
            const userImage = response.data?.user?.image
                ? response.data.user.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
            dispatch(setUser({ ...response.data.user, image: userImage }));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate('/dashboard/my-profile');
        } catch (err) {
            console.log("LOGIN API ERROR............", err);
            toast.error("LOGIN");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}
