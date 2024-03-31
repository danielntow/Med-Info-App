// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">MedInfo App</Link>
        <div className="space-x-4">
          <Link to="/conditions">Conditions</Link>
          <Link to="/articles">Articles</Link>
          {/* Add more links for other sections */}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
