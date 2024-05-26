import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import frameImg from '../../../assets/loginImage/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

interface TemplateProps {
    title: string;
    description1: string;
    description2: string;
    image: string;
    formType: 'signup' | 'login';
}

const Template: React.FC<TemplateProps> = ({ title, description1, description2, image, formType }) => {
    const { loading } = useSelector((state: any) => state.auth);

    return (
        <div className="grid min-h-screen place-items-center bg-gray-100 px-4">
            {loading ? (
                <Spinner />
            ) : (
                <div className="container mx-auto flex flex-col-reverse justify-between gap-y-8 md:flex-row md:gap-y-0 md:gap-x-12">
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg md:max-w-lg md:p-8">
                        {/* <h1 className="text-3xl font-semibold leading-tight text-gray-900 mb-6">{title}</h1> */}
                        <p className="text-lg leading-relaxed text-gray-700">
                            {description1}{" "}
                            <span className="font-semibold text-blue-600 italic">{description2}</span>
                        </p>
                        {formType === "signup" ? <SignupForm /> : <LoginForm />}
                    </div>
                    <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
                        <img
                            src={frameImg}
                            alt="Pattern"
                            width={558}
                            height={504}
                            loading="lazy"
                        />
                        <img
                            src={image}
                            alt="Students"
                            width={558}
                            height={504}
                            loading="lazy"
                            className="absolute -top-3 right-3 z-10"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Template;
