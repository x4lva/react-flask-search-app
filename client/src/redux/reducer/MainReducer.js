import { UPDATE_MAIN_STATE } from "../type/MainTypes";

const initialState = {
    searchValue: "",
    searchIsSubmitted: false,
    searchData: {},
    searchIsLoading: true,
    searchStackoverflowCount: 3,
    searchHabrCount: 5,
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MAIN_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default mainReducer;
