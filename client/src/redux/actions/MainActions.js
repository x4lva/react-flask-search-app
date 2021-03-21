import { UPDATE_MAIN_STATE } from "../type/MainTypes";
import axios from "axios";

export const updateUserData = (payload) => {
    return {
        type: UPDATE_MAIN_STATE,
        payload,
    };
};

export const setSearchValue = (searchValue) => (dispatch, getState) => {
    dispatch(
        updateUserData({
            searchValue: searchValue,
        })
    );
};

export const toggleSearchIsSubmitted = () => (dispatch, getState) => {
    dispatch(
        updateUserData({
            searchIsLoading: true,
        })
    );
    dispatch(
        updateUserData({
            searchIsSubmitted: !getState().mainState.searchIsSubmitted,
        })
    );
    axios
        .post("http://localhost:3000/data", {
            search: getState().mainState.searchValue,
        })
        .then(async (r) => {
            await dispatch(
                updateUserData({
                    searchData: r.data,
                })
            );
            dispatch(
                updateUserData({
                    searchIsLoading: false,
                })
            );
        });
};
