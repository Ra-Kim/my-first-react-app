import React from "react";
import HeadSection from "./HeadSection";
import MainContent from "./MainContent";
import FootSection from "./FootSection";

export default function App () {
    return(
        <div className="container" >
            <HeadSection />
            <MainContent />
            <FootSection />
        </div>
    )
}