import React from "react";
import "./SearchPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
    setSearchValue,
    toggleSearchIsSubmitted,
} from "../../redux/actions/MainActions";

function SearchPage(props) {
    const dispatch = useDispatch();

    const { searchValue } = useSelector((state) => state.mainState);

    const setSearch = useCallback((e) => {
        dispatch(setSearchValue(e.target.value));
    }, []);

    const submitSearchForm = useCallback((e) => {
        e.preventDefault();
        dispatch(toggleSearchIsSubmitted());
    }, []);

    return (
        <div className="search-wrapper min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="search-container">
                <div className="search-logo">Gooder</div>
                <form onSubmit={submitSearchForm} className="search-form">
                    <input
                        placeholder="What are you searching for..."
                        value={searchValue}
                        onChange={setSearch}
                        className="search-form-text"
                        type="text"
                    />
                    <button
                        className="search-form-submit text-uppercase"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchPage;
