import _axios from "axios";

const Axios = () => {
    const instance = _axios.create({ baseURL: "https://broccolimedia.herokuapp.com/" });
    return instance;
}

export default Axios();