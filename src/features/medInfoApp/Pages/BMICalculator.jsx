import React, { useState } from 'react';
import Layout from '../Layout';

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [heightUnit, setHeightUnit] = useState('cm');
    const [weightUnit, setWeightUnit] = useState('kg');
    const [bmiResult, setBmiResult] = useState(null);

    const calculateBMI = () => {
        const heightInMeters = convertHeightToMeters();
        const weightInKg = convertWeightToKg();

        if (!heightInMeters || !weightInKg) {
            return;
        }

        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setBmiResult(bmi.toFixed(2));
    };

    const convertHeightToMeters = () => {
        let heightInMeters;
        if (heightUnit === 'cm') {
            heightInMeters = height / 100;
        } else if (heightUnit === 'in') {
            heightInMeters = height * 0.0254;
        } else if (heightUnit === 'ft') {
            heightInMeters = height * 0.3048;
        } else {
            heightInMeters = height;
        }
        return heightInMeters;
    };

    const convertWeightToKg = () => {
        let weightInKg;
        if (weightUnit === 'lbs') {
            weightInKg = weight * 0.453592; // Convert pounds to kilograms
        } else {
            weightInKg = weight;
        }
        return weightInKg;
    };

    const interpretBMI = () => {
        if (bmiResult < 18.5) {
            return 'Underweight';
        } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
            return <span className="text-green-600">Normal weight</span>;
        } else if (bmiResult >= 25 && bmiResult < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    };

    const bmiColor = () => {
        if (bmiResult < 18.5 || bmiResult >= 25) {
            return 'text-red-500';
        } else {
            return 'text-green-600';
        }
    };



    return (
        <Layout title="BMI Calculator" content="Calculate your Body Mass Index (BMI)">
            <div className="min-h-screen flex flex-col justify-center items-center mx-4 mb-5">
                <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl px-6 py-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">BMI Calculator</h1>
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="number"
                            className="w-2/3 px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <select
                            className="w-1/3 px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                            value={heightUnit}
                            onChange={(e) => setHeightUnit(e.target.value)}
                        >
                            <option value="cm">cm</option>
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                            <option value="m">m</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="number"
                            className="w-2/3 px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <select
                            className="w-1/3 px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
                            value={weightUnit}
                            onChange={(e) => setWeightUnit(e.target.value)}
                        >
                            <option value="kg">kg</option>
                            <option value="lbs">lbs</option>
                        </select>
                    </div>
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={calculateBMI}
                    >
                        Calculate BMI
                    </button>
                    {bmiResult && (
                        <div className="mt-6">
                            <p className={`text-lg font-semibold text-gray-800 mb-2`}>Your BMI: {bmiResult}</p>
                            <p className={`text-2xl font-bold text-center ${bmiColor()}`}> <span className='text-black text-lg'>You are</span> {interpretBMI()}</p>
                        </div>
                    )}
                </div>
                <div className="mt-8 max-w-md md:max-w-lg lg:max-w-2xl px-6 py-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is BMI?</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
                        It is calculated by dividing an individual's weight in kilograms by the square of their height in meters.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        BMI provides a simple numeric measure of a person's <span className='text-blue-500'> "fatness" or "thinness"</span>, allowing health professionals to
                        categorize a person's weight into several broad categories: <span className='text-blue-500'> underweight, normal weight, overweight</span>, and <span className='text-blue-500'>obese</span>.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        While BMI can be a useful tool for identifying weight problems in most adults, it is not perfect and has limitations.
                        <span className='text-blue-500'> It does not differentiate between weight due to muscle mass and weight due to fat mass, and it may not apply equally well
                            to all population groups </span>, such as athletes and older adults.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default BMICalculator;
