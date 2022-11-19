import React, { useContext } from "react";

import Search from "./Search";
import Users from "./Users";
import Loading from "./Loading";
import GithubContext from "../contexts/GitHub/githubContext";
function Home() {
    const githubContext = useContext(GithubContext);

    return (
        <>
            <Search />
            {githubContext.loading && <Loading />}
            <Users  />
        </>
    )
}

export default Home;