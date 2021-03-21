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

export const clearData = () => (dispatch, getState) => {
    dispatch(
        updateUserData({
            searchHabrCount: 5,
            searchStackoverflowCount: 3,
            searchData: {},
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

export const addHabrCount = () => (dispatch, getState) => {
    dispatch(
        updateUserData({
            searchHabrCount: getState().mainState.searchHabrCount + 5,
        })
    );
};

export const addStackCount = () => (dispatch, getState) => {
    dispatch(
        updateUserData({
            searchStackoverflowCount:
                getState().mainState.searchStackoverflowCount + 3,
        })
    );
};
