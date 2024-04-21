import React from 'react';
import Layout from '../Layout';
import { NewspaperIcon } from '@heroicons/react/outline';

const HealthNews = () => {
    return (
        <Layout title="Health News">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <NewspaperIcon className="h-12 w-12 text-blue-500 mx-auto" />
                    <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Health News</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Stay updated with the latest health news and information.
                    </p>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Article 1: The Dangers of Fatty Food */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">The Dangers of Fatty Food</h2>
                            <p className="mt-2 text-sm text-gray-500">Fatty foods, while often delicious, can pose serious risks to our health when consumed in excess. These foods are typically high in unhealthy fats, such as saturated and trans fats, which can lead to numerous health problems.</p>
                            <p className="mt-2 text-sm text-gray-500">One of the most well-known dangers of fatty foods is their link to heart disease. Consuming too much saturated and trans fats can raise cholesterol levels, leading to the buildup of plaque in the arteries and increasing the risk of heart attack and stroke.</p>
                            <p className="mt-2 text-sm text-gray-500">Additionally, fatty foods are often high in calories and low in nutrients, leading to weight gain and obesity. Obesity is a major risk factor for many chronic diseases, including type 2 diabetes, certain cancers, and hypertension.</p>
                            <p className="mt-2 text-sm text-gray-500">To protect our health, it's important to limit our intake of fatty foods and opt for healthier alternatives whenever possible. Choosing foods that are rich in unsaturated fats, such as nuts, seeds, avocados, and fatty fish, can provide essential nutrients without the negative health effects of saturated and trans fats.</p>
                        </div>
                        <div className="bg-gray-50 px-6 py-3">
                            <p className="text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Read more</p>
                        </div>
                    </div>
                    {/* Article 2: The Hazards of Excessive Sugar Consumption */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">The Hazards of Excessive Sugar Consumption</h2>
                            <p className="mt-2 text-sm text-gray-500">Consuming too much sugar can have detrimental effects on our health, leading to a variety of health issues. Excessive sugar intake has been linked to obesity, type 2 diabetes, heart disease, and even certain cancers.</p>
                            <p className="mt-2 text-sm text-gray-500">One of the main problems with sugar is that it provides empty calories, meaning it has little to no nutritional value. When we consume too much sugar, our bodies may struggle to regulate blood sugar levels, leading to insulin resistance and eventually diabetes.</p>
                            <p className="mt-2 text-sm text-gray-500">Furthermore, sugary foods and beverages can contribute to weight gain and obesity, increasing the risk of developing other health conditions such as heart disease and hypertension. It's important to be mindful of our sugar intake and opt for healthier alternatives whenever possible.</p>
                        </div>
                        <div className="bg-gray-50 px-6 py-3">
                            <p className="text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Read more</p>
                        </div>
                    </div>
                    {/* Article 3: The Importance of Regular Exercise */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">The Importance of Regular Exercise</h2>
                            <p className="mt-2 text-sm text-gray-500">Regular exercise is essential for maintaining good health and well-being. It has numerous benefits for both physical and mental health, including reducing the risk of chronic diseases, improving mood, and boosting energy levels.</p>
                            <p className="mt-2 text-sm text-gray-500">Exercise helps to strengthen the heart and improve cardiovascular health, reducing the risk of heart disease and stroke. It also plays a key role in maintaining a healthy weight and reducing the risk of obesity and related conditions such as type 2 diabetes.</p>
                            <p className="mt-2 text-sm text-gray-500">Additionally, regular physical activity can help to improve mental health by reducing symptoms of anxiety and depression, boosting mood, and improving sleep quality. It can also enhance cognitive function and reduce the risk of age-related cognitive decline.</p>
                            <p className="mt-2 text-sm text-gray-500">To reap the benefits of exercise, it's important to engage in a variety of activities that include cardiovascular exercise, strength training, and flexibility exercises. Aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week.</p>
                        </div>
                        <div className="bg-gray-50 px-6 py-3">
                            <p className="text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Read more</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HealthNews;
