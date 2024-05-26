import React from 'react';
import Template from '../auth/Template';
import signupImage from '../../../assets/loginImage/signup.webp';

// Define the Signup component as a React Functional Component
const Signup: React.FC = () => {
    return (
        <div>
            <Template
                title="Signup"
                description1="Build skills for today, tomorrow, and beyond."
                description2="Education to future-proof your career."
                image={signupImage}
                formType="signup"
            />
        </div>
    );
}

export default Signup;
