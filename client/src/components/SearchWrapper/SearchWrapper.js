import React from "react";
import SearchPage from "../../pages/SearchPage/SearchPage";
import { useSelector } from "react-redux";
import SearchResultsWrapper from "../SearchResultsWrapper/SearchResultsWrapper";

function SearchWrapper(props) {
    const { searchIsSubmitted } = useSelector((store) => store.mainState);

    return (
        <div>
            {searchIsSubmitted ? <SearchResultsWrapper /> : <SearchPage />}
        </div>
    );
}

export default SearchWrapper;
