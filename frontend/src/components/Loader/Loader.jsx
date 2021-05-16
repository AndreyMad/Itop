import React from "react";
import Loader from "react-loader-spinner";
import style from "./Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const customLoader = () => {
  return (
    <div className={style.shadow}>
    <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default customLoader;
