import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation.jsx";
import Navbar from "./components/Navbar.jsx";
import { getDrug } from "./slice/medinfoSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import MyFooter from "./components/MyFooter.jsx";
import DrugPage from "./Pages/DrugPage.jsx";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

const Layout = ({ children, title, content, type, name, description }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const { drug, loading } = useSelector(state => state.medinfo);
    // const shouldRenderDrugPage = !drug && !drug.name;
    // const handleSearch = (term) => {
    //     setSearchTerm(term);
    // };



    // const { drug } = useSelector((state) => state.medinfo || " ");
    // const { loading } = useSelector(state => state.medinfo);


    let handleChange = (event) => {
        setSearchTerm(event.target.value);

    };
    useEffect(() => {
        if (searchTerm)
            dispatch(getDrug(searchTerm));

    }, [dispatch, drug, searchTerm])


    // useEffect(() => {
    //     // dispatch(getDrug(searchTerm));
    // }, [searchTerm]);




    useEffect(() => {
        if (drug && drug.name) {
            navigate(`/${drug.name}`); // Navigate to the "/drug" route
        }
    }, [navigate, drug]);
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={content} />
                <meta name="description" content={description} />
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:creator" content={name} />
                <meta name="twitter:card" content={type} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Helmet>
            <Navbar handleChange={handleChange} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="grid bg-blue-50 overflow-scroll min-h-screen">
                <div className=" mt-5">
                    {/* Render DrugPage only if condition is met */}
                    {/* {shouldRenderDrugPage && <DrugPage searchTerm={searchTerm} drug={drug} />} */}
                    {/* Render other children */}
                    {children}
                    {/* {React.Children.map(children, (child) => {
                        return React.cloneElement(child, { searchTerm, drug });
                    })} */}
                    {/* {children} */}
                </div>

            </div>
            <MyFooter />
        </>
    );
};

export default Layout;
