import React from 'react';
import {pathologies} from '../data/pathologyData.js';

function Body(props){
  return <p>{props.pathologyDefinition}</p>;
};

export default Body;