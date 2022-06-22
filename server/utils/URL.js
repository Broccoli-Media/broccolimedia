let URLs = {};

if (process.env.NODE_ENV === "production") {
    URLs = {
        baseURL: "https://broccolimedia.herokuapp.com/",
        socketURL: "https://broccolimedia.herokuapp.com/",
    };
} else {
    URLs = {
        baseURL: "http://localhost:5000/",
        socketURL: "http://localhost:5000/",
    }
}

export default URLs;