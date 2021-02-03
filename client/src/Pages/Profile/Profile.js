import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Pane, Heading } from "evergreen-ui";

const Profile = () => {
  return (
    <Pane>
        <Heading size={900}>Profile Page</Heading>
        <NavBar />
    </Pane>
  );
};

export default Profile;
