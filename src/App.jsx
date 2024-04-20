import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "features/medInfoApp/Pages/HomePage.jsx"
import PageNotFound from 'features/medInfoApp/PageNotFound';
import DrugPage from 'features/medInfoApp/Pages/DrugPage';
import { useSelector } from 'react-redux';
import About from 'features/medInfoApp/Pages/About';


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const helmetContext = {};


  return (
    <>
      <div className="">
        <HelmetProvider context={helmetContext}>
          <QueryClientProvider client={client}>
            <ToastContainer />
            <Router>
              {/* <AuthProvider> */}

              <Routes>


                <Route path="/" element={<HomePage />} />
                <Route path="/about-medinfo" element={<About />} />
                <Route path="/:drugName?" element={<DrugPage />} />
                <Route path="*" element={<PageNotFound />} />



              </Routes>

              {/* </AuthProvider> */}
            </Router>
          </QueryClientProvider>
        </HelmetProvider>
      </div>
    </>
  )
}

export default App
