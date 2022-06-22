import _axios from "axios";

export const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

const Axios = () => {
    const instance = _axios.create({ baseURL: "https://broccolimedia.herokuapp.com/" });
    return instance;
}

export default Axios();