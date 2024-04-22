import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { drugSlice } from "../slice/medinfoSlice";
import { getDrug } from "../slice/medinfoSlice";
import Layout from "../Layout";
import { mymed } from "assets/mysvgs";
import { capsule } from "assets/capsule-line";

import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
// export const useAppSelector = useSelector();
// import PillIcon from "assets/pill-icon.png"; // Example image

const DrugPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const { drug, loading, error } = useSelector((state) => state.medinfo);


    return (
        <Layout>
            {(drug && drug.name) ?
                <div className="px-8 mx-2">
                    <div className="bg-sea-blue text-[#1f668a] flex flex-col justify-between mx-auto max-w-7xl">
                        <div className="flex underline ">
                            <span className="text-8xl font-bold mt-8 mb-4 max-sm:text-4xl">{drug?.name}</span>
                            <span className="mt-[60px] max-sm:mt-[40px]">{capsule}</span>
                        </div>
                        <div className="">
                            <div>
                                <p className="text-2xl font-bold mt-8 mb-4">Dosages</p>
                                <p className="text-xl text-black">{drug?.dosages}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mt-8 mb-4">Adverse Effect</p>
                                <p className="text-xl text-black">{drug?.adverse_effects}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mt-8 mb-4">Warnings</p>
                                <p className="text-xl text-black">{drug?.warnings}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mt-8 mb-4">Pregnancy & Lactation</p>
                                <p className="text-xl text-black">{drug?.pregnancy_lactations}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mt-8 mb-4">Contraindications</p>
                                <p className="text-xl text-black">{drug?.contraindications}</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold mt-8 mb-4">Administration</p>
                                <p className="text-xl text-black">{drug?.administrations}</p>
                            </div>
                        </div>
                        <div>
                            <button className="my-4 bg-white text-sea-blue px-4 py-2 rounded-md font-semibold hover:bg-sea-blue hover:text-purple-900 transition duration-300">Download PDF</button>
                        </div>
                    </div>
                </div>

                : <div class="grid place-content-center items-center h-screen">
                    <p class="text-[#055a65] font-bold text-xl">
                        Oops... No drug exists with the given search parameter
                    </p>
                    <p class="text-[#348893] font-bold text-center">
                        Check the spelling or be sure if such drug exists
                    </p>
                </div>

            }


        </Layout>
    );
};

// DrugPage.propTypes = {
//     // searchTerm: PropTypes.string.isRequired,
//     drug: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string,
//             dosages: PropTypes.string,
//             adverse_effects: PropTypes.string
//         })
//     ).isRequired
// };


export default DrugPage;
