import React, { useState } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios if using it

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://apps.nlm.nih.gov/medlineplus/services/mpconnect_service.cfm?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=${encodeURIComponent(searchTerm)}`);
            
            if (response.status !== 200) {
                throw new Error('Failed to fetch data');
            }

            const data = response.data;

            if (data.fullUrl) {
                // Direct user to the provided URL (if any)
                window.open(data.fullUrl, '_blank');
            } else {
                // Handle search results
                setSearchResults(data);
            }
        } catch (error) {
            console.error('Error searching:', error);
            setError('Unable to fetch data, please try again later');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className='text-center'>
                <h1 className='text-5xl text-blue-600 mb-8'>Welcome to MedInfo App</h1>
                <p className='text-lg text-gray-700 mb-6'>Your trusted source for medical information and resources.</p>
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search MedlinePlus..."
                        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-r hover:bg-blue-600"
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {searchResults.length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.name}>{result.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
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
