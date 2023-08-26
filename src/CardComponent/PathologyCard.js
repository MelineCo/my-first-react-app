import React from 'react';
import Header from './Header';
import Body from './Body';

function PathologyCard(props){
  return (
    <div>
      <Header pathologyImg={props.pathologyObject.pathologyImg} pathologyName={props.pathologyObject.pathologyName}/>
      <Body pathologyDefinition={props.pathologyObject.pathologyDefinition}/>
    </div>
  );
};

export default PathologyCard;
