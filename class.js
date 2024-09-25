import React from 'react';

 export class Table2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
            <h1>Table N2</h1>
            <table border="1px">
              <tr><td>Code tache</td><td>Date tache</td><td>Resumé</td></tr>
                {this.props.tab.map(function (x, i) {
                  return <tr><td key={i}>{x.Code}</td>
                  <td key={i}>{x.Date}</td><td key={i}>{x.Resumé}</td> </tr>;
                })}
            </table>
            </>
          );
    }
}