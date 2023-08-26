import React from 'react';
import {pathologies} from './data/pathologyData';
import PathologyCard from './CardComponent/PathologyCard';

function App(props) {
  return pathologies.map(pathology =>
    <PathologyCard pathologyObject = {pathology}/>
  );
}

export default App;
