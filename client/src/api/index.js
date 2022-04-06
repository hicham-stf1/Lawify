import axios from 'axios'; 

const url = "http://localhost:5000/api/v1/calender";

export const fetchCalender = () => axios.get(url);