import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Info from './App';
import {ListDR }from './App';
import {Table }from './App';
import {Total }from './App';
import {Table2 }from './class';

import {Employe} from './data';
import {types} from './data';
import {projets} from './data';
import {Taches}from './data';



const root = ReactDOM.createRoot(document.getElementById('root'));

 function App() {
  return (
    <div >
      <Info/>
      <ListDR title="Type" inffo={types}/>
      <ListDR title="Employe" inffo={Employe}/>
      <ListDR title="Projet" inffo={projets}/><br/>
      <Table  tab={Taches}/>
      <Total tab={Taches}/><br/>
      <Table2 tab={Taches}/>
      
    </div>
  )};

root.render(<App/> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
