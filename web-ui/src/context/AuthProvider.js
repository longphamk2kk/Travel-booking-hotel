
import {createContext, useEffect, useReducer, useState} from "react";
import axios from "../api/axios";

const INITIAL_STATE = {
    token: JSON.parse(localStorage.getItem("token")) || null,
    loading: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                token: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                token: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                token: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                token: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const [user, setUser] = useState()

    useEffect(() => {
        if (state.token != null){
            localStorage.setItem("token", JSON.stringify(state.token));
            axios.post("Login/Auth", {
                accessToken: state.token,
                refreshToken: "",
            })
                .then(function (response){
                    setUser(response.data.data)
                }).catch(function (error) {
                console.log(error);
            })
        }
    }, [state.token]);

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                loading: state.loading,
                error: state.error,
                user: user,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
