import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabrCount, addStackCount } from "../../redux/actions/MainActions";
import { useCallback } from "react";

function SearchStackoverflowItem(props) {
    const dispatch = useDispatch();

    const { searchData, searchStackoverflowCount } = useSelector(
        (store) => store.mainState
    );

    const addCount = useCallback(() => {
        dispatch(addStackCount());
    }, []);

    const stackoverflowData = searchData.stackoverflow
        .slice(0, searchStackoverflowCount)
        .map((el) => {
            const tags = el.tags.map((tag) => {
                return <div className="search-data-list-item-link">#{tag}</div>;
            });

            return (
                <a target="_blank" href={el.link}>
                    <div className="search-data-list-item">
                        <div
                            style={{ marginBottom: 15 }}
                            className="search-data-list-item-title d-flex justify-content-between"
                        >
                            {el.title.length > 30
                                ? el.title.substring(0, 30) + "..."
                                : el.title}
                            <div className="d-flex align-items-center">
                                <div className="search-data-list-stack-data">
                                    {el.view_count}
                                </div>
                                <div className="search-data-list-stack-data">
                                    {el.answer_count}
                                </div>
                                <div className="search-data-list-stack-data">
                                    {el.score}
                                </div>
                            </div>
                        </div>
                        <div className="search-data-list-item-tags d-flex">
                            {tags}
                        </div>
                    </div>
                </a>
            );
        });

    return (
        <div>
            {stackoverflowData}
            <div onClick={addCount} className="search-data-more">
                Load more
            </div>
        </div>
    );
}

export default SearchStackoverflowItem;
