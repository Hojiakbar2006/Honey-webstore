import React, { useEffect } from "react";
import "./Assets/Css/Global.css";
import axios from "axios";
import { Router } from "./Router";
import { Login } from "./Pages/Login/Login";


export function App() {
  useEffect(() => {
    axios("https://honey.pandashop.uz/guest/add")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
    <Router/>
    {/* <Login/> */}
    </>
  );
}
