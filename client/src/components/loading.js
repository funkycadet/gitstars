import React from "react";
import ReactLoading from "react-loading";
// import { Section, Title, Article, Prop, list } from "./generic";
// import "./styles.css";

export const Loading = () => {
 return (
    <>
        <ReactLoading type="spinningBubbles" color="#053BED" height={'10%'} width={'10%'} />
    </>
)
};

export default Loading;