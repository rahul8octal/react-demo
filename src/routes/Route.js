import React from "react";
// import { Routes, Route } from "react-router-dom";
import Demo1 from "../components/Demo1";
import Demo from "../components/Demo";
import Api from "../components/Api";
import Dashboard from "../components/Dashboard";


const routes = [

  {
    path: "/",
    component: <Demo1/>,
  }, 
  {
    path: "/demo",
    component: <Demo/>,
  },
  {
    path: "/api",
    component: <Api/>,
  },
  {
    path: "/dashboard",
    component: <Dashboard/>,
  },

]

export default routes;

