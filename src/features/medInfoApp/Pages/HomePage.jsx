import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios if using it
import SearchDrug from '../components/SearchDrug';
import { useSelector } from 'react-redux';

const HomePage = () => {

    const navigate = useNavigate()
    const { loading, error, drug } = useSelector((state) => state.medinfo);

    const [initialNavigation, setInitialNavigation] = useState(true);

    // useEffect(() => {
    //     if (initialNavigation && drug && drug.name) {
    //         navigate(`/${drug.name}`); // Navigate to the "/drug" route
    //         setInitialNavigation(false)
    //     }
    // }, [drug, navigate, initialNavigation]);


    const goToPage = (drug) => {
        const navigate = useNavigate();

        if (drug.name) {
            // Navigate to DrugPage if drug is available
            navigate(`/${drug.name}`);
        } else {
            // Navigate to homepage if drug is not available
            navigate('/');
        }
    };

    // const [navigationDone, setNavigationDone] = useState(false);

    // useEffect(() => {
    //     if (!navigationDone && drug && drug.name) {
    //         navigate(`/${drug.name}`); // Navigate to the "/drug" route
    //         setNavigationDone(true);
    //     }
    // }, [navigationDone, drug, navigate,]);
    // useEffect(() => {
    //     if (drug && drug.name) {
    //         navigate(`/${drug.name}`); // Navigate to the "/drug" route

    //     }
    // }, [drug, navigate,]);

    return (
        <Layout>
            <div className='text-center'>
                <h1 className='text-4xl   md:text-5xl max-sm: text-blue-600 mb-8'>Welcome to MedInfo App</h1>
                <p className='text-lg text-gray-700 mb-6'>Your trusted source for medical information and resources.</p>
                <div className="mb-8">

                </div>
                {!drug.name && <p className="text-red-500">Loading...</p>}

                <div className='mb-8'>
                    <Link to='/conditions' className='text-lg text-blue-600 mr-4'>Browse Conditions</Link>
                    <Link to='/articles' className='text-lg text-blue-600'>Read Articles</Link>
                </div>
                <p className='text-lg text-gray-700 mb-6'>Download the MedInfo app today and take control of your health!</p>
                <button className='bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600'>Download Now</button>
            </div>
        </Layout>
    );
}

export default HomePage;
