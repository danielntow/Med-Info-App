import React from 'react'
import Layout from '../Layout'

const About = () => {
    return (
        <Layout title="About Us - Med Info App">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">About Us</h1>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-gray-700 mb-4">
                        At <span className="text-blue-500">MedInfo</span>, our mission is to provide users with accurate and detailed information about a wide range of common drugs. We understand the importance of having access to reliable information when it comes to medications, and we aim to empower individuals to make informed decisions about their health.
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Comprehensive Drug Information</li>
                        <li>User-Friendly Interface</li>
                        <li>Search Functionality</li>
                        <li>Educational Resources</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Our Commitment to Accuracy</h2>
                    <p className="text-gray-700 mb-4">
                        At <span className="text-blue-500">MedInfo</span>, we understand the importance of accuracy when it comes to healthcare information. That's why we take great care to ensure that all the information provided on our website is accurate, up-to-date, and sourced from reputable sources.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
                    <p className="text-gray-700 mb-4">
                        Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to <a href="#" className="text-blue-500 hover:underline">contact us</a> with any inquiries, and our team will be happy to assist you.
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export default About