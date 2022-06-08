import React, { Fragment } from "react";
import UserSearch from "../components/users/UserSearch";
import UserResults from "../components/users/UserResults";

function Home() {
  return (
    <Fragment>
      <UserSearch />
      <UserResults />
    </Fragment>
  );
}

export default Home;
