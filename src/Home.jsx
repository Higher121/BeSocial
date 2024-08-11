import { useState } from 'react';
import "./Home.css";
import MyFooter from "./My_components/MyFooter";

export const Home = ({ fullName }) => {
  return (
    <>
      <div className="heroSection">
        <h1>Hello {fullName}, This Is HomePage</h1>
        <p>Something Big is Coming Soon.....</p>
      </div>
      <MyFooter />
    </>
  );
};
