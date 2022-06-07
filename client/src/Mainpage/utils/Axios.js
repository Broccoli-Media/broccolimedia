import _axios from "axios";

const axios = () => {
    const instance = _axios.create({
        baseURL: "https://broccolimedia.net/" || "http://localhost:5000/api"
    });
    return instance;
}

export default axios();