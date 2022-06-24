import _axios from "axios";

const Axios = () => {
    // http://localhost:5000
    // https://broccolimedia.herokuapp.com/
    const instance = _axios.create({ baseURL: "'https://cors-anywhere.herokuapp.com/https://broccolimedia.herokuapp.com/" });
    return instance;
}

export default Axios();