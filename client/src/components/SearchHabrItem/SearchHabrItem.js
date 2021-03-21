import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addHabrCount,
    clearData,
    toggleSearchIsSubmitted,
} from "../../redux/actions/MainActions";
import { useCallback } from "react";

function SearchHabrItem(props) {
    const dispatch = useDispatch();

    const { searchData, searchHabrCount } = useSelector(
        (store) => store.mainState
    );

    const addCount = useCallback(() => {
        dispatch(addHabrCount());
    }, []);

    const habrData = searchData.habr.slice(0, searchHabrCount).map((el) => {
        const tags = el.tags.map((tag) => {
            return <div className="search-data-list-item-link">#{tag}</div>;
        });

        return (
            <div className="search-data-list-item">
                <a target="_blank" href={el.link}>
                    <div className="search-data-list-item-title d-flex justify-content-between align-items-center">
                        <div style={{ marginRight: 10 }}>{el.title}</div>
                        <span className="search-data-author">@{el.author}</span>
                    </div>
                    <div className="search-data-list-item-desc">{el.text}</div>
                    <div className="search-data-list-item-tags d-flex">
                        {tags}
                    </div>
                </a>
            </div>
        );
    });

    return (
        <div>
            {habrData}
            <div onClick={addCount} className="search-data-more">
                Load more
            </div>
        </div>
    );
}

export default SearchHabrItem;
