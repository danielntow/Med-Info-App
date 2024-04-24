import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { healthNewsData } from '../healthNews'; // Import the JSON data
import Layout from '../Layout';
import Cookies from 'js-cookie';

const HealthArticlePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = Cookies.get('isAuthenticated'); // Corrected
        console.log("isAuthenticated", isAuthenticated);
        // If not authenticated, redirect to the authentication redirect page
        if (isAuthenticated != 'true') {
            navigate('/get-authenticated');
        }
    }, [navigate]);

    // Get the article slug from the URL
    const { slug } = useParams();

    // Find the article with the matching slug
    const article = healthNewsData.find(article => article.url === slug);

    // Check if the article exists
    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <Layout>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <img src={article.image} alt={article.topic} className="w-full h-64 object-cover object-center" />
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold text-gray-900">{article.topic}</h2>
                        <p className="mt-4 text-lg text-gray-700">{article.body}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HealthArticlePage;
