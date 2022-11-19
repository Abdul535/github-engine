import { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import axios from "axios";
import { SET_LOADING, SET_USERS, SHOW_ALERT, SET_USER, SET_REPOS } from "../types";

function GitHubState(props) {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);


    const setLoading = () => dispatch({ type: SET_LOADING });

    const AllUsers = async () => {
        try {
            setLoading();
            const res = await axios.get("https://api.github.com/users", {
                headers: {
                    "Authorization": `Bearer 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`
                }
            });
            dispatch({
                type: SET_USERS,
                payload: res.data
            });
            // eslint-disable-next-line
        } catch (error) {
            // showAlert({ type: "danger", msg: "Something Went Wrong. Try Again Later." });
            console.log(error);
        }
    }


    const searchUsers = async (username) => {
        try {
            dispatch({
                type: SET_USERS,
                payload: []
            });
            setLoading();
            const res = await axios.get(`https://api.github.com/search/users?q=${username}`, {
                headers: {
                    "Authorization": `Bearer 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`
                }
            });
            console.log(res.data.items)
            dispatch({
                type: SET_USERS,
                payload: res.data.items
            });
        } catch (error) {
            // showAlert({ type: "danger", msg: "Something Went Wrong. Try Again Later." });
            console.log(error);
        }
    }

    const clearUsers = () => {
        dispatch({
            type: SET_USERS,
            payload: []
        });
    }

    const showAlert = (alert) => {
        dispatch({ type: SHOW_ALERT, payload: alert });
        setTimeout(() => {
            dispatch({ type: SHOW_ALERT, payload: null });
        }, 5000);
    }

    const fetchUser = async (uname) => {
        try {
            setLoading();
            const res = await axios.get(`https://api.github.com/users/${uname}`, {
                headers: {
                    "Authorization": `Bearer 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`
                }
            });
            console.log(res.data);
            dispatch({ type: SET_USER, payload: res.data });
        } catch (error) {
            console.log(error);
        }
    }

    const topRepos = async (uname) => {
        try {
            setLoading();
            const res = await axios.get(`https://api.github.com/users/${uname}/repos?sort=desc`, {
                headers: {
                    "Authorization": `Bearer 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`
                }
            });
            console.log(res.data);
            dispatch({ type: SET_REPOS, payload: res.data });
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <GithubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            alert: state.alert,
            AllUsers, searchUsers, showAlert, clearUsers,
            fetchUser, topRepos

        }}>
            {props.children}
        </GithubContext.Provider>
    )
}


export default GitHubState;