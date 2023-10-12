import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import UserList from './UserList';
import UserDetails from './UserDetails';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} /> {/* Use 'element' instead of 'component' */}
        <Route path="/UserDetails" element={<UserDetails/>} /> {/* Use 'element' instead of 'component' */}
      </Routes>
    </Router>
  );
}

export default AppRouter;




