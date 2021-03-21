import React from "react";
import { useSelector } from "react-redux";
import SearchLoading from "../SearchLoading/SearchLoading";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";

function SearchResultsWrapper(props) {
    const { searchIsLoading } = useSelector((store) => store.mainState);

    return <div>{searchIsLoading ? <SearchLoading /> : <ResultsPage />}</div>;
}

export default SearchResultsWrapper;
