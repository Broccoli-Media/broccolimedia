import { useEffect, useState } from "react";
import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": 'https://broccolimedia.net/, http://localhost:3000, https://broccolimedia.herokuapp.com/, http://localhost:5000',
        "Access-Control-Allow-Methods": 'GET,POST,DELETE,UPDATE,PUT,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token',
        "Access-Control-Allow-Credentials": true
    }
};

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url, config);
                setData(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url, config);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
};

export default useFetch;