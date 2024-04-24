import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const AuthenticationRedirect = () => {
    const navigate = useNavigate();
    const [showRedirect, setShowRedirect] = useState(false);

    // Redirect to the login page after 5 seconds
    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            setShowRedirect(true);
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, []);

    // Redirect to login page
    useEffect(() => {
        if (showRedirect) {
            navigate('/psignin');
        }
    }, [showRedirect, navigate]);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 mx-auto px-4">
            <div

            >
                <div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">MedInfo App</h1>
                    <div className='flex place-content-center'>
                        <svg className="animate-spin h-6 w-6 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm12-1.662A7.963 7.963 0 0120 12h4c0 4.418-3.582 8-8 8v-4zm-1.662-12A7.962 7.962 0 0112 4v4a4.96 4.96 0 004.162 4.928L15.338 7.63zm-6.676 0L8.662 11.93A4.96 4.96 0 0012 8V4h-4zM4 11.709V12a8 8 0 008 8h4c-.042-1.95-.712-3.802-1.927-5.216L8.662 11.71zM12 20v-.291a4.96 4.96 0 004.162-4.928L15.338 16.37A6.977 6.977 0 0112 17v3z"></path>
                        </svg>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">You need to log in to access all pages of the MedInfo App.</p>
                    <p className="text-lg text-gray-700 mb-4">You'll be redirected to the login page in 5 seconds...</p>
                    <Link to="/psignin" className="text-blue-500 hover:underline">Click here to login now</Link>
                </div>
            </div >
        </div >
    );
};

export default AuthenticationRedirect;
