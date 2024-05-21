
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:4000/api/v1";

if (!BASE_URL) {
    throw new Error("REACT_APP_BASE_URL is not defined");
}

export const endpoints: Record<string, string> = {
    SENDOTP_API: `${BASE_URL}/sendotp`,
    SIGNUP_API: `${BASE_URL}/signup`,
    LOGIN_API: `${BASE_URL}/login`,
    RESETPASSTOKEN_API: `${BASE_URL}/reset-password-token`,
    RESETPASSWORD_API: `${BASE_URL}/reset-password`,
};
export const categories = {
    CATEGORIES_API: BASE_URL + "/get-all-categories",
}