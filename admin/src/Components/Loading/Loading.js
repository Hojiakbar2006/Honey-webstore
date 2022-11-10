import React from "react";
import "./Loading.css";
import { useSelector } from 'react-redux';

export function Loading() {
    const loading = useSelector((state)=>state.loading)
  return (
    <section
      className="loading"
      style={loading ? { display: "flex" } : { display: "none" }}
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
