import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/amazn-clone-87f56/us-central1/api", //THE API (cloud function) URL
})

export default instance;