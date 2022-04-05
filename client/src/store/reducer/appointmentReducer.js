import axios from "axios";

const getDataFromLocal = () => {
    return JSON.parse(localStorage.getItem('appointMentData'))
}

const getDataFromDatabase = () => {
    return axios.get('http://localhost:5000/api/v1/calender')
}

const initialState = getDataFromDatabase() || [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_APPOINTMENT":
            state = [...state, action.payload]
            localStorage.setItem('appointMentData', JSON.stringify(state))
            return state;
        default:
            return state;
    }
}

export default reducer;