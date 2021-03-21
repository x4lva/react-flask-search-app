import React from "react";

function SearchLoading(props) {
    return (
        <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center">
            <div className="spinner-grow text-white" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default SearchLoading;
