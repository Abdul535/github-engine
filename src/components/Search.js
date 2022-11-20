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
            <h2 style={{paddingBottom:"15px",fontWeight:"600px",color:"white"}}>Github Search Engine</h2>
            <Alert alert={githubContext.alert}/>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Your Username Here ... "
                    autocomplete="off"
                    onChange={onChangeHandler}
                    value={username}
                />
                <button className="submit">Search</button>
            <button className="clear" onClick={githubContext.clearUsers}>Clear</button>
            </form>
        </div>
    )
}

export default Search;