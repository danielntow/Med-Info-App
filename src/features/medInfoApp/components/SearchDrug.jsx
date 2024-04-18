import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrug } from "../slice/medinfoSlice";



const SearchDrug = ({ searchTerm, handleChange }) => {


    // const { drug } = useSelector((state) => state.drug || {});
    // const [searchTerm, setSearchTerm] = useState("");

    // const handleSearch = () => {
    //     onSearch(searchTerm);
    // };


    // const handleChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };


    // useEffect(() => {
    //     dispatch(getDrug(searchTerm));
    // }, [dispatch, searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center w-full sm:w-auto sm:flex justify-end md:w-2/4 ">
                <input
                    type="search"
                    placeholder="Search Med Info"
                    className="flex-grow rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 bg-white mr-4"
                    value={searchTerm}
                    onChange={handleChange}
                // onChange={(e) => handleChange(e)}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400 cursor-pointer hover:text-teal-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m0-6l-3-3m3 3l-3 3m8 0l-3-3m3 3l-12 12-3-3"
                    />
                </svg>
            </div>
        </form>
    )
}

export default SearchDrug