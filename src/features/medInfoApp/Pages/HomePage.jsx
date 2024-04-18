import React, { useState } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios if using it
import SearchDrug from '../components/SearchDrug';
import { useSelector } from 'react-redux';

const HomePage = () => {


    const { loading, error } = useSelector((state) => state.medinfo);


    return (
        <Layout>
            <div className='text-center'>
                <h1 className='text-4xl   md:text-5xl max-sm: text-blue-600 mb-8'>Welcome to MedInfo App</h1>
                <p className='text-lg text-gray-700 mb-6'>Your trusted source for medical information and resources.</p>
                <div className="mb-8">

                </div>
                {error && <p className="text-red-500">{error}</p>}

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
