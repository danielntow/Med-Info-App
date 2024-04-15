import { useState } from 'react'
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
import { AuthProvider } from "app/context/AuthContext";
import HomePage from "features/medInfoApp/Pages/HomePage.jsx"
import PageNotFound from 'features/medInfoApp/PageNotFound';
import DrugPage from 'features/medInfoApp/Pages/DrugPage';


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const helmetContext = {};

  const [message, setMessage] = useState("");


  return (
    <>
      <div className="">
        <HelmetProvider context={helmetContext}>
          <QueryClientProvider client={client}>
            <ToastContainer />
            <Router>
              <AuthProvider>
                <Routes>
                  <Route>

                    <Route path="/" element={<HomePage />} />
                    <Route path="/med-info/:drug?" element={<DrugPage />} />
                    <Route path="*" element={<PageNotFound />} />


                  </Route>
                </Routes>

              </AuthProvider>
            </Router>
          </QueryClientProvider>
        </HelmetProvider>
      </div>
    </>
  )
}

export default App
