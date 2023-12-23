import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Demo1 from "../components/Demo1";
// import Demo from "../components/Demo";
import routess from './Route';

const RoutePage = () => {
      return (
      <Routes>
        {routess.map((route, index) => (
        <Route
          path={route.path}
          element={route.component}
          key={index}
        />
      ))}
{/*      
        <Route path="/demo1" element={<Demo1  />} />
        <Route path="/demo" element={<Demo />} /> */}
      </Routes>
  );

}

export default RoutePage;