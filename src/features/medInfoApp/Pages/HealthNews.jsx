import React, { useEffect } from 'react';
import Layout from '../Layout';
import { NewspaperIcon } from '@heroicons/react/outline';
import { healthNewsData } from '../healthNews'; // Import the JSON data
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HealthNews = () => {
    return (
        <Layout title="Health News">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 max-sm:mx-1">
                <div className="max-w-3xl mx-auto text-center">
                    <NewspaperIcon className="h-12 w-12 text-blue-500 mx-auto" />
                    <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Health News</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Stay updated with the latest health news and information.
                    </p>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3  mx-auto max-sm:mx-1 ">
                    {healthNewsData.map(article => (
                        // <div key={article.id} className="bg-white overflow-hidden shadow rounded-lg flex flex-col card">
                        //     <div className="p-6 flex-grow">
                        //         <h2 className="text-lg font-medium text-gray-900">{article.topic}</h2>
                        //         <p className="mt-2 text-sm text-gray-500">{article.body.split(' ').slice(0, 30).join(' ')}...</p>
                        //     </div>
                        //     <div className="bg-gray-50 px-6 py-3">

                        //         <Link to={`/health-news/${article.url}`} className="text-sm font-medium text-blue-600 hover:text-blue-400">Read more</Link>
                        //     </div>
                        // </div>
                        <div key={article.id} className="bg-white overflow-hidden shadow rounded-lg flex flex-col card transition-transform hover:scale-105">
                            <div className="p-6 flex-grow">
                                <h2 className="text-lg font-medium text-gray-900">{article.topic}</h2>
                                <p className="mt-2 text-sm text-gray-500">{article.body.split(' ').slice(0, 30).join(' ')}...</p>
                            </div>
                            <div className="bg-gray-50 px-6 py-3">
                                {/* Link to the full article page */}
                                <Link to={`/health-news/${article.url}`} className="text-sm font-medium text-blue-600 hover:text-blue-400">Read more</Link>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HealthNews;
