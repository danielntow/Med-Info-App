import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrug } from "../slice/medinfoSlice";
import Layout from "../Layout";
import { mymed } from "assets/mysvgs";
// import PillIcon from "assets/pill-icon.png"; // Example image

const DrugPage = () => {
    const dispatch = useDispatch();
    const { drug } = useSelector((state) => state.drug || {});
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        dispatch(getDrug(searchTerm));
    }, [dispatch, searchTerm]);

    const med = (
        <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.0001 22V17C32.0001 15.3431 33.3433 14 35.0001 14L45.0001 14C46.657 14 48.0001 15.3431 48.0001 17L48.0001 22V27V27.5V28V28.5V29V29.5V30V30.5V31V31.25V31.5V31.75C48.0001 31.8881 48.112 32 48.2501 32H48.5H49H49.5H50H50.5H51H58L63 32C64.6569 32 66 33.3431 66 35V45C66 46.6569 64.6569 48 63 48H58H51H50.5H50H49.5H49H48.5H48.2501C48.112 48 48.0001 48.1119 48.0001 48.25V48.5V48.75V49V49.25V49.5V49.75V50V50.25V50.5V50.75V51V51.5V52V52.5V53V53.5V54L48.0001 54.5L48.0001 55V58L48.0001 63C48.0001 64.6568 46.657 66 45.0001 66L35.0001 66C33.3433 66 32.0001 64.6569 32.0001 63L32.0001 58L32.0001 55V54.5L32.0001 54V53.5V53V52.5V52V51.5V51V50.75V50.5V50.25V50V49.75V49.5V49.25V49V48.75V48.5V48.25V48.0001C32.0001 48 32.0001 48 32 48H31.5H31H22H17C15.3431 48 14 46.6568 14 45L14 35C14 33.3431 15.3431 32 17 32H22H31H31.5H32C32.0001 32 32.0001 32 32.0001 31.9999V31.75V31.5V31.25V31V30.5V30V29.5V29V28.5V28V27.5V27V22Z"
                fill="#EB5757"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.6989 25.1454V23.4949C36.6989 22.5833 37.4378 21.8443 38.3494 21.8443H41.6505C42.5621 21.8443 43.301 22.5833 43.301 23.4949L43.301 25.1454V29.2718V29.6844V30.0971V30.5097V30.9223V31.335V31.7476V32.1602V32.5729V32.7792V32.9855V33.1918V33.3981V33.6227V33.8473V34.0719V34.2965V34.5075V34.7185V34.9294V35.1404V35.3238V35.5072V35.6906V35.8739V36.2866C43.301 36.5145 43.4858 36.6992 43.7137 36.6992H44.1263H44.5389H44.9516H45.3642H45.7768H46.1895H46.6021H47.0147H47.4274H47.84H47.2526H48.6653H49.0779H54.8548L56.5054 36.6992C57.4169 36.6992 58.1559 37.4382 58.1559 38.3498L58.1559 41.6508C58.1559 42.5624 57.4169 43.3014 56.5053 43.3014H54.8548L49.0779 43.3014H48.6653H48.2526H47.84H47.4274H47.0147H46.6021H46.1895H45.7768H45.3642H44.9516H44.5389H44.1263C43.6705 43.3014 43.301 43.6709 43.301 44.1267V44.5393V44.9519V45.3646V45.7772V45.9835V46.1898V46.3961V46.6025V46.8088V47.0151L43.301 47.2214V47.4277V47.6341V47.8404V48.0467V48.253V48.4593V48.6656V48.872V49.0783V49.4909V49.9035V50.3162V50.7288V51.1414V51.5541V51.9667L43.301 52.3794L43.301 54.8552V56.5057C43.301 57.4173 42.5621 58.1562 41.6505 58.1562L38.3494 58.1562C37.4378 58.1563 36.6989 57.4173 36.6989 56.5057L36.6989 54.8552L36.6989 52.3794L36.6989 51.9667L36.6989 51.5541V51.1414V50.7288V50.3162V49.9035V49.4909V49.0783V48.872V48.6656V48.4593V48.253V48.0467V47.8404V47.6341V47.4277V47.2214L36.6989 47.0151V46.8088V46.6025V46.3961V46.1898V45.9835V45.7772V45.3646V44.9519V44.5393V44.1267L36.6989 43.714C36.6989 43.4861 36.5141 43.3014 36.2862 43.3014H35.8736H35.5068H35.14H34.7181H34.2962H33.847H33.3978H32.9851H32.5725H25.1451L23.4945 43.3014C22.583 43.3014 21.844 42.5624 21.844 41.6508L21.844 38.3498C21.844 37.4382 22.583 36.6992 23.4945 36.6992H25.1451L32.5725 36.6992H32.9851H33.3978H33.847H34.2962H34.7181H35.14H35.5068H35.8736H36.2862C36.5141 36.6992 36.6989 36.5145 36.6989 36.2866V35.8739V35.6906V35.5072V35.3238V35.1404V34.9294V34.7185V34.5075V34.2965V34.0719V33.8473V33.6227V33.3981V33.1918V32.9855V32.7792V32.5729V32.1602V31.7476V31.335V30.9223L36.6989 30.5097V30.0971V29.6844V29.2718L36.6989 25.1454Z"
                fill="#F2994A"
            />
        </svg>
    );


    return (
        <Layout>
            <div className="grid grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="col-span-1 bg-sea-blue text-purple-900 p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Drug Information</h1>
                        <i className="fa-solid fa-pills w-20 h-20 mb-8 text-orange-800 "></i>
                        {/* <img src={PillIcon} alt="Pill Icon" className="w-20 h-20 mb-8" /> */}
                        <p className="text-lg">Name: {drug?.name}</p>
                        <p className="text-lg">Dosages: {drug?.dosages}</p>
                        <p className="text-lg">Adverse Effects: {drug?.adverse_effects}</p>
                    </div>
                    <div>
                        <button className="bg-white text-sea-blue px-4 py-2 rounded-md font-semibold hover:bg-sea-blue hover:text-purple-900 transition duration-300">Print</button>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="col-span-1 p-8 bg-gray-100">
                    {/* Add content for the middle section */}
                    {mymed}
                </div>

                {/* Right Section */}
                <div className="col-span-1 bg-sea-blue text-purple-900 p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Indications</h2>
                        <p>{drug?.indications}</p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Warnings</h2>
                        <p>{drug?.warnings}</p>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Adminstrations</h2>
                        <p>{drug?.administrations}</p>
                    </div>
                    <div>
                        <button className="bg-white text-sea-blue px-4 py-2 rounded-md font-semibold hover:bg-sea-blue hover:text-purple-900 transition duration-300">Download PDF</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DrugPage;
