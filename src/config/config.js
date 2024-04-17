import { useMemo } from "react";
import { useLocation } from "react-router";

// Define the API URL based on environment variable or fallback to localhost
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Optional: Define a custom hook to parse query parameters
export const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
};
