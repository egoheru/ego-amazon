import axios from "axios";

const instance = axios.create({
    // THE API URL (cloud function) URL
    baseURL: 'https://us-central1-ego-53f33.cloudfunctions.net/api'  
     // 'http://localhost:5001/ego-53f33/us-central1/api', 
});

export default instance;

