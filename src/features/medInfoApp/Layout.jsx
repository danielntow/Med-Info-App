import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation.jsx";
import Navbar from "./components/Navbar.jsx";
import { clearDrug, getDrug } from "./slice/medinfoSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import MyFooter from "./components/MyFooter.jsx";
import DrugPage from "./Pages/DrugPage.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { mymed } from "assets/mysvgs.jsx";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";

const Layout = ({ children, title = 'Med Info App', content, type, name, description }) => {
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
        if (searchTerm) {
            dispatch(getDrug(searchTerm));
            // setSearchTerm("")
        }

    }, [dispatch, drug, searchTerm])

    useEffect(() => {
        if (!loading && searchTerm && drug && drug.name) {
            navigate(`/${drug.name}`); // Navigate to the "/drug" route

        }
    }, [loading, drug, navigate, searchTerm,]);


    // useEffect(() => {
    //     // dispatch(getDrug(searchTerm));
    // }, [searchTerm]);

    // const [initialNavigation, setInitialNavigation] = useState(true);



    // useEffect(() => {
    //     if (drug && drug.name) {
    //         navigate(`/${drug.name}`); // Navigate to the "/drug" route

    //     }
    // }, [drug, navigate,]);
    const username = Cookies.get('username')
    const isAuthenticated = Cookies.get('isAuthenticated')
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
            <div className="grid bg-blue-50  min-h-screen gap-0">

                <div className=" ">
                    <div className="">
                        {isAuthenticated ?
                            <div className="flex bg-black">
                                <p className="flex place-content-start w-full pl-10 max-sm:pl-5  font-extrabold text-sm bg-gradient-to-r bg-clip-text hidden max-sm:flex">   <span className="text-xl text-transparent bg-gradient-to-r from-red-500 to-yellow-500 to-green-500 to-blue-500 to-purple-500 bg-clip-text ">Logout</span></p>
                                <p className=" flex place-content-end w-full pr-10 max-sm:pr-5   font-extrabold text-sm text-transparent bg-gradient-to-r bg-clip-text from-[#87CEEB] to-[#2E86C1]"> <span className="text-xl text-transparent bg-gradient-to-r from-red-500 to-yellow-500 to-green-500 to-blue-500 to-purple-500 bg-clip-text">@ {username}</span></p>
                            </div>



                            :
                            <div className="">
                                <NavLink to="/register" className="text-white text-sm hover:underline mr-4">Register</NavLink>
                                <NavLink to="/psignin" className="text-white text-sm hover:underline">Login</NavLink>
                            </div>
                        }
                    </div>


                    {children}
                </div>

            </div>
            <MyFooter />
        </>
    );
};

export default Layout;
