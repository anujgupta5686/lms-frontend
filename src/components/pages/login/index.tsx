import React from 'react';
import Template from '../auth/Template';
import loginImage from '../../../assets/loginImage/login.webp';

// Define the Signup component as a React Functional Component
const Login: React.FC = () => {
    return (
        <div>
            <Template
                title="Login"
                description1="Build skills for today, tomorrow, and beyond."
                description2="Education to future-proof your career."
                image={loginImage}
                formType="login"
            />
        </div>
    );
}

export default Login;
