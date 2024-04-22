import React from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import SearchDrug from '../components/SearchDrug';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const { loading, error, drug } = useSelector((state) => state.medinfo);

    return (
        <Layout>
            <div className="mx-auto px-4 py-8 overflow-hidden max-sm:max-w-sm max-w-6xl">
                <h1 className="text-4xl md:text-5xl text-center text-blue-600 font-bold mb-8"> <p>Welcome to</p><p>MedInfo App</p>  </h1>
                <p className="text-lg  text-center text-gray-700 mb-6">Your trusted source for medical information and resources.</p>



                <div className="flex justify-center mb-8">
                    {/* <Link to="/conditions" className="text-lg text-blue-600 hover:underline mr-4">Browse Conditions</Link> */}
                    <Link to="/health-news" className="text-lg text-blue-600 hover:underline text-center">Read Articles</Link>
                </div>
                <div className="text-lg text-center text-gray-700 mb-6">
                    Discover a wealth of medical information at your fingertips. Whether you're looking for drug information, health conditions, or educational articles, we've got you covered.
                </div>
                <div className="text-lg text-center text-gray-700 mb-6">
                    Our mission is to empower individuals to make informed decisions about their health and well-being. With MedInfo, you can access accurate and reliable information whenever you need it.
                </div>
                <div className="text-lg text-center text-gray-700 mb-6">
                    Take control of your health journey today. Join millions of users who trust MedInfo for their medical information needs.
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
