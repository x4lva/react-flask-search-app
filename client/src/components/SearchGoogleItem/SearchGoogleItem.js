import React from "react";
import { useSelector } from "react-redux";
import "./SearchGoogleItem.css";

function SearchGoogleItem(props) {
    const { searchData } = useSelector((store) => store.mainState);

    console.log(searchData.google);

    const googleData = searchData.google.map((el) => {
        return (
            <div className="search-data-list-item">
                <div className="search-data-list-item-title">{el.title}</div>
                <div className="search-data-list-item-desc">
                    {el.description}
                </div>
                <div className="search-data-list-item-link">
                    <a target="_blank" href={el.link}>
                        {el.link
                            .replaceAll("https://", "")
                            .replaceAll("http://", "")
                            .replaceAll("/", " › ")
                            .substring(0, 50)
                            .toLowerCase()}
                    </a>
                </div>
            </div>
        );
    });

    return <div>{googleData}</div>;
}

export default SearchGoogleItem;
