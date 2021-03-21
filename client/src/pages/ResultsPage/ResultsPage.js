import React from "react";
import "./ResultsPage.css";
import SearchGoogleItem from "../../components/SearchGoogleItem/SearchGoogleItem";

function ResultsPage(props) {
    return (
        <div className="d-flex justify-content-center">
            <div className="search-data-container d-flex justify-content-between">
                <div className="search-data-container-item">
                    <div className="search-data-list">
                        <SearchGoogleItem />
                    </div>
                </div>
                <div className="search-data-container-item">
                    <div className="search-data-list"></div>
                    <div className="search-data-list"></div>
                </div>
            </div>
        </div>
    );
}

export default ResultsPage;
