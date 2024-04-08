import React, { useState, useRef } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef(null); // Ref for search input element

    const handleSearch = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://wsearch.nlm.nih.gov/ws/query/search?query=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setSearchResults(data.results);
            searchInputRef.current.blur(); // Remove focus from search input after search (focus management)
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
                <p className='text-lg text-gray-700 mb-6'>Your trusted source for medicinal information and resources.</p>
                <div className="flex justify-center items-center mb-8">
                    <img src='/images/medi.jpeg' alt='Medical' className='rounded-lg' />
                </div>
                <p className='text-lg text-gray-700 mb-6'>Explore our app to:</p>
                <ul className='text-lg text-gray-700 mb-6'>
                    <li>Find comprehensive information on various medications and treatments.</li>
                    <li>Access articles, dosage information, and expert opinions on your medications.</li>
                    <li>Stay updated on the latest medical news and breakthroughs.</li>
                </ul>
                <div className='flex justify-center items-center mb-6'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        ref={searchInputRef} // Assign ref to search input element
                    />
                    <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-r hover:bg-blue-600"
                        onClick={handleSearch}
                        disabled={loading}
                        aria-label="Search"
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {searchResults && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.id}>{result.title}</li>
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
