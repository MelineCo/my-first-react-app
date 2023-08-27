import React from 'react';
import {pathologies} from '../data/pathologyData.js';

function Header(props){
  return (
    <div>
      <img src={props.pathologyImg}/>
      <h1 style={titleStyle} >{props.pathologyName}</h1>
    </div>
  );
};

const titleStyle = {
    background: '#ADD8E6',
    color: 'blue',
    fontSize: 20
}

export default Header;