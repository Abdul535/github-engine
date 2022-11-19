import React, { useState,useContext } from "react";
import GithubContext from "../contexts/GitHub/githubContext";

import Alert from "./Alert";
function Search() {
    const githubContext = useContext(GithubContext);
    const [username, setUsername] = useState("");

    const onChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(username === ""){
            return githubContext.showAlert({type : "danger", msg : "Username cannot be empty"});
        }
        githubContext.searchUsers(username);
        setUsername("");
    }
    return (
        <div className="header">
            <h1>Github Search Engine</h1>
            <Alert alert={githubContext.alert}/>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Your Username Here ... "
                    autoComplete="off"
                    onChange={onChangeHandler}
                    value={username}
                />
                <br />
                <button className="submit">Search</button>
            </form>
            <br />
            <button className="clear" onClick={githubContext.clearUsers}>Clear</button>
        </div>
    )
}

export default Search;