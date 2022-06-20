import _axios from "axios";

const axios = () => {
    const instance = _axios.create({ baseURL: "https://broccolimedia.herokuapp.com/" });
    return instance;
}

export default axios();