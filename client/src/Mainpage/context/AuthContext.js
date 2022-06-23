import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    userLoading: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN_START":
            return {
                user: null,
                userLoading: true,
                error: null,
            };
        case "SIGNIN_SUCCESS":
            return {
                user: action.payload,
                userLoading: false,
                error: null,
            };
        case "SIGNIN_FAILURE":
            return {
                user: null,
                userLoading: false,
                error: action.payload,
            };
        case "SIGNOUT":
            return {
                user: null,
                userLoading: false,
                error: null,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                userLoading: state.userLoading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};