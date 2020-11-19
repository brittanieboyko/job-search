import React from 'react';
import DetailsContainer from '../../Components/DetailsContainer/DetailsContainer'
import {useLocation} from "react-router-dom";

const Details = () => {
  const location = useLocation();
    return <DetailsContainer job={location.state.job}/>;
  }

export default Details;