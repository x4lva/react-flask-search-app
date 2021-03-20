import React from "react";
import { useState } from "react";
import "./SearchPage.css";

function SearchPage(props) {
    const [searchValue, setSearchValue] = useState("");

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };

    const onSearchSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="search-wrapper min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <div className="search-container">
                <div className="search-logo">Gooder</div>
                <form onSubmit={onSearchSubmit} className="search-form">
                    <input
                        placeholder="What are you searching for..."
                        value={searchValue}
                        onChange={onSearchValueChange}
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
