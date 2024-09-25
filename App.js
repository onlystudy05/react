import React from 'react';


import './App.css';

// function Header(props) {
//   var sty = { color: props.cl, backgroundColor: props.bg }
//   return (
//     <div >
//       <h1 style={sty}>Bienvenue dans l'application {props.app} </h1>
//     </div>
//   )


// }

export default function Info() {
  return (
    <div >
      <h4>Responsable connecte :  <strong>Saad Mourabit</strong></h4>
      <h4> Code : TY523</h4>
    </div>
  );
}
export function ListDR(props) {
  return (
    <div >
      <label>{props.title} : </label>
      <select>
        {props.inffo.map(function (x, i) {
          return <option key={i}>{x}</option>;
        })}
      </select>
    </div>
  );
}
export function Table(props) {
  return (
    <table border="1px">
      <tr><td>Code tache</td><td>Date tache</td><td>Resumé</td></tr>
        {props.tab.map(function (x, i) {
          return <tr><td key={i}>{x.Code}</td>
          <td key={i}>{x.Date}</td><td key={i}>{x.Resumé}</td> </tr>;
        })}
    </table>
  );
}
export function Total(props) {
  return (
    <>
      <label>Total des heures travaillees : {props.tab.reduce(function(a,b){return a+=b.Durée},0)}</label>
      
    </>
  );
}


