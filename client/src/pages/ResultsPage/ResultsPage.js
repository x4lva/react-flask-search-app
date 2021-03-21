import React from "react";
import "./ResultsPage.css";
import SearchGoogleItem from "../../components/SearchGoogleItem/SearchGoogleItem";
import SearchStackoverflowItem from "../../components/SearchStackoverflowItem/SearchStackoverflowItem";
import SearchHabrItem from "../../components/SearchHabrItem/SearchHabrItem";
import {
    clearData,
    toggleSearchIsSubmitted,
} from "../../redux/actions/MainActions";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

function ResultsPage(props) {
    const dispatch = useDispatch();

    const getBack = useCallback(() => {
        dispatch(toggleSearchIsSubmitted());
        dispatch(clearData());
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <div onClick={getBack} className="search-back">
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="search-data-container d-flex justify-content-between">
                <div className="search-data-container-item">
                    <div className="search-data-list">
                        <SearchGoogleItem />
                    </div>
                </div>
                <div className="search-data-container-item">
                    <div className="search-data-list">
                        <SearchStackoverflowItem />
                    </div>
                    <div className="search-data-list">
                        <SearchHabrItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsPage;
