import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrugs, getDrug } from "../slice/medinfoSlice";

import { useParams } from "react-router-dom";
import Layout from "../Layout";





const DrugPage = () => {

    const { drug, drugs } = useSelector((state) => state.drug);
    const dispatch = useDispatch();

    // State to hold the value of the search input
    const [searchTerm, setSearchTerm] = useState("");

    // Event handler to update the search term state as the user types
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };



    useEffect(() => {
        dispatch(getDrug(searchTerm));
        dispatch(getAllDrugs)
    }, [dispatch, searchTerm]);

    console.log('drug', drugs);
    return (
        <Layout>
            <div>
                <h1>Drug Page</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <p>Search Term: {searchTerm}</p>
            </div>

        </Layout>
    )
}

export default DrugPage