import _axios from "axios";

const Axios = () => {
    const instance = _axios.create({ baseURL: "http://localhost:5000/" });
    return instance;
}

export default Axios();