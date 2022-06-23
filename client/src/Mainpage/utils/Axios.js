import _axios from "axios";

const Axios = () => {
    // http://localhost:5000
    // https://broccolimedia.herokuapp.com/
    const instance = _axios.create({ baseURL: "http://localhost:5000" });
    return instance;
}

export default Axios();