import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Icon } from '@iconify/react';
import Loading from "./Loading";
import GithubContext from "../contexts/GitHub/githubContext";

import './User.css'

function User() {
    const { uname } = useParams();
    const githubContext = useContext(GithubContext);
    const months = ["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    function getUpdated(UTC){
        let month = new Date(UTC).getMonth();
        let nameInMonth = months[month];
        let date = new Date(UTC).getDate();
        return `Updated on ${nameInMonth} ${date}`
    }

    useEffect(() => {
        githubContext.fetchUser(uname);
        githubContext.topRepos(uname);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {githubContext.loading && <Loading />}
            {!githubContext.loading && <div className="container">
                <div className="card">
                    <img src={githubContext.user.avatar_url} alt="" />
                    <p className="fullname"> {githubContext.user.name} </p>
                    <p className="username"> {githubContext.user.login} </p>
                    <p className="bio"> {githubContext.user.bio}</p>
                    <div className="follows"><span><Icon icon="octicon:people-24" color="#8b949e" />
                     <span className="bold">
                        {" "+githubContext.user.followers+" "}
                    </span>
                     followers 
                     <span className="bold">
                     {" "+githubContext.user.following+" "} 
                    </span>
                     following 
                    </span></div>
                    <div className="description">

                        {githubContext.user.company && <p>
                            <span><a href={`https://twitter.com/${githubContext.user.twitter_username}`} target="_blank" rel="noreferrer">
                        <Icon icon="octicon:organization-16" color="#8b949e" />
                                {" "+githubContext.user.company}</a></span>
                        </p>}
                            <br />
                        {githubContext.user.location && <p>
                             <span style={{color:"#ddd"}}><i className="fa-solid fa-location-dot"> </i> {" "+githubContext.user.location}</span>
                        </p>}
                            <br />

                        {githubContext.user.blog && <p>
                             <span><a href={`http://${githubContext.user.blog}`} target="_blank" rel="noreferrer">
                            <Icon icon="octicon:link-16" color="#8b949e" />
                                {" "+githubContext.user.blog}</a></span>
                        </p>}
                            <br />

                        {githubContext.user.twitter_username && <p>
                            <span><a href={`https://twitter.com/${githubContext.user.twitter_username}`} target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-twitter" /> {" "+githubContext.user.twitter_username}</a></span>
                        </p>
                        }
                            <br />
                    </div>
                </div>
                <div className="card2">

                    <ol>
                        {githubContext.repos.map((repo, index) => (
                            <div key={index} className="repo-details">
                                <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                                <span>
                                <p>{repo.visibility}</p>
                                </span>
                                <p className="desc"> {repo.description}</p>
                                <div>
                                {repo.license?.name ?
                                (<> <Icon icon="octicon:law-16" />
                                 {" "+repo.license.name+" "}</>): null }
                                 {` ${getUpdated(repo.updated_at)}`}
                                </div>
                                 {repo.topics ? 
                                 (
                                    repo.topics.map(e => <p className="topics">{e}</p>)
                                 )
                                 : null }
                            </div>
                        ))}
                    </ol>
                </div>
            </div>}

        </>
    )
}

export default User;