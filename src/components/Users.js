import React, { useContext } from "react";

import { Link } from "react-router-dom";
import GithubContext from "../contexts/GitHub/githubContext";

import './Users.css'

function Users() {
    const githubContext = useContext(GithubContext);
    return (
        <center>
            <div className="row">
                { githubContext.users.length ? 
                <h1>{githubContext.users.length} users</h1>:null
                }
                {githubContext.users.map((user, i) => (
                    <>
                    <div className="side" key={i}>
                        <img src={user.avatar_url} alt="" />
                        <div className='click'>
                            <h2>
                            {user.login}
                            </h2>   
                        </div>
                        <div className="profile">
                            <Link to={`/user/${user.login}`}>
                                Click Profile
                            </Link>
                        </div>
                    </div>
                    {/* <hr style={{width:"100px",height:"0.1em"}}/> */}
                    </>
                ))}
            </div>
        </center>
    )
}

export default Users;