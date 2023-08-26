import React from 'react';
import {pathologies} from '../data/pathologyData.js';

function Header(props){
  return (
    <div>
      <img src={props.pathologyImg}/>
      <h1>{props.pathologyName}</h1>
    </div>
  );
};

export default Header;